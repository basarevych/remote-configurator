const EventEmitter = require("events");
const {
  execute,
  subscribe,
  GraphQLObjectType,
  GraphQLSchema
} = require("graphql");
const { nodeDefinitions } = require("graphql-relay");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const constants = require("../../common/constants");

class GraphQL extends EventEmitter {
  constructor(app, ws, auth, users, devices) {
    super();

    this.app = app;
    this.ws = ws;
    this.auth = auth;
    this.users = users;
    this.devices = devices;

    this.nodeDefinitions = nodeDefinitions(
      (globalId, context) => {
        const result = _.find(
          [
            this.auth.idFetcher(globalId, context),
            this.users.idFetcher(globalId, context),
            this.devices.idFetcher(globalId, context)
          ],
          value => !!value
        );
        return result || null;
      },
      obj => {
        const result = _.find(
          [
            this.auth.typeResolver(obj),
            this.users.typeResolver(obj),
            this.devices.typeResolver(obj)
          ],
          value => !!value
        );
        return result || null;
      }
    );
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app", "ws", "graphql.auth", "graphql.users", "graphql.devices"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = new Promise(async (resolve, reject) => {
      try {
        this.auth.init();
        this.users.init();
        this.devices.init();

        this.Viewer = new GraphQLObjectType({
          name: "Viewer",
          fields: _.merge(
            this.auth.query,
            this.users.query,
            this.devices.query,
            { node: this.nodeDefinitions.nodeField }
          )
        });

        this.Query = new GraphQLObjectType({
          name: "Query",
          fields: {
            viewer: {
              type: this.Viewer,
              resolve: _.constant({})
            },
            node: this.nodeDefinitions.nodeField
          }
        });

        this.Mutation = new GraphQLObjectType({
          name: "Mutation",
          fields: _.merge(
            {},
            this.auth.mutation,
            this.users.mutation,
            this.devices.mutation
          )
        });

        this.Subscription = new GraphQLObjectType({
          name: "Subscription",
          fields: _.merge(
            {},
            this.auth.subscription,
            this.users.subscription,
            this.devices.subscription
          )
        });

        this.schema = new GraphQLSchema({
          query: this.Query,
          mutation: this.Mutation,
          subscription: this.Subscription
        });

        if (this.app.server) {
          await this.ws.init();
          this.subscriptions = SubscriptionServer.create(
            {
              schema: this.schema,
              execute,
              subscribe
            },
            {
              server: this.app.server,
              path: constants.graphqlBase
            }
          );
        }

        resolve();
      } catch (error) {
        reject(error);
      }
    });
    return this.promise;
  }
}

module.exports = GraphQL;
