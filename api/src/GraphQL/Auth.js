const EventEmitter = require("events");
const { GraphQLString, GraphQLBoolean } = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");

class Auth extends EventEmitter {
  constructor(di, authRepo) {
    super();

    this.di = di;
    this.authRepo = authRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.auth";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "repository.auth"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  idFetcher() {
    return null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  typeResolver() {
    return null;
  }

  init() {
    this.query = {};

    this.SignInMutation = mutationWithClientMutationId({
      name: "SignIn",
      inputFields: {
        login: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => success
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.signIn(context, args)
    });

    this.SignOutMutation = mutationWithClientMutationId({
      name: "SignOut",
      inputFields: {},
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => success
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.signOut(context, args)
    });

    this.mutation = {
      signIn: this.SignInMutation,
      signOut: this.SignOutMutation
    };

    this.subscription = {};
  }
}

module.exports = Auth;
