const EventEmitter = require("events");
const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType
} = require("graphql");
const {
  connectionArgs,
  connectionDefinitions,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId
} = require("graphql-relay");
const {
  connectionFromPromisedArray,
  documentToCursor
} = require("../LokiConnection");
const GraphQLDate = require("./Date");

class Devices extends EventEmitter {
  constructor(di, deviceModel, devicesRepo) {
    super();

    this.di = di;
    this.deviceModel = deviceModel;
    this.devicesRepo = devicesRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.devices";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "model.device", "repository.devices"];
  }

  idFetcher(globalId, context) {
    const { type, id } = fromGlobalId(globalId);
    if (type === "Device") return this.devicesRepo.getDevice(context, { id });
    return null;
  }

  typeResolver(obj) {
    if (obj instanceof this.deviceModel.model) return this.Device;
    return null;
  }

  init() {
    const root = this.di.get("graphql");
    const { nodeInterface } = root.nodeDefinitions;

    this.Device = new GraphQLObjectType({
      name: "Device",
      fields: () => ({
        id: globalIdField("Device"),
        whenCreated: { type: new GraphQLNonNull(GraphQLDate) },
        whenUpdated: { type: new GraphQLNonNull(GraphQLDate) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        owner: { type: new GraphQLNonNull(root.users.User) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: DevicesConnection,
      edgeType: DeviceEdge
    } = connectionDefinitions({
      name: "Device",
      nodeType: this.Device,
      connectionFields: () => ({
        totalCount: {
          type: GraphQLInt,
          resolve: async (source, args, context) =>
            this.devicesRepo.countDevices(context, args)
        }
      })
    });
    this.DevicesConnection = DevicesConnection;
    this.DeviceEdge = DeviceEdge;

    this.query = {
      device: {
        type: this.Device,
        args: {
          id: { type: GraphQLID }
        },
        resolve: (source, args, context) =>
          this.devicesRepo.getDevice(
            context,
            _.assign({}, args, { id: args.id && fromGlobalId(args.id).id })
          )
      },
      devices: {
        type: this.DevicesConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.devicesRepo.getDevices(context, args),
            args
          )
      }
    };

    this.CreateDeviceMutation = mutationWithClientMutationId({
      name: "CreateDevice",
      inputFields: {
        name: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      outputFields: {
        deviceEdge: {
          type: this.DeviceEdge,
          resolve: async ({ device }) => ({
            cursor: documentToCursor(device),
            node: device
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const device = await this.devicesRepo.createDevice(context, args);
        return { device };
      }
    });

    this.EditDeviceMutation = mutationWithClientMutationId({
      name: "EditDevice",
      inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      outputFields: {
        deviceEdge: {
          type: this.DeviceEdge,
          resolve: async ({ device }) => ({
            cursor: documentToCursor(device),
            node: device
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const device = await this.devicesRepo.editDevice(
          context,
          _.assign({}, args, { id: args.id && fromGlobalId(args.id).id })
        );
        return { device };
      }
    });

    this.DeleteDeviceMutation = mutationWithClientMutationId({
      name: "DeleteDevice",
      inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      outputFields: {
        deviceEdge: {
          type: this.DeviceEdge,
          resolve: async ({ device }) => ({
            cursor: documentToCursor(device),
            node: device
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const device = await this.devicesRepo.deleteDevice(
          context,
          _.assign({}, args, { id: args.id && fromGlobalId(args.id).id })
        );
        return { device };
      }
    });

    this.mutation = {
      createDevice: this.CreateDeviceMutation,
      editDevice: this.EditDeviceMutation,
      deleteDevice: this.DeleteDeviceMutation
    };

    this.subscription = {
      deviceCreated: {
        type: this.Device,
        args: {
          token: { type: GraphQLString }
        },
        resolve: ({ deviceCreated }) => deviceCreated,
        subscribe: this.devicesRepo.subscribe("deviceCreated")
      },
      deviceUpdated: {
        type: this.Device,
        args: {
          token: { type: GraphQLString }
        },
        resolve: ({ deviceUpdated }) => deviceUpdated,
        subscribe: this.devicesRepo.subscribe("deviceUpdated")
      },
      deviceDeleted: {
        type: this.Device,
        args: {
          token: { type: GraphQLString }
        },
        resolve: ({ deviceDeleted }) => deviceDeleted,
        subscribe: this.devicesRepo.subscribe("deviceDeleted")
      },
      deviceEvent: {
        type: this.Device,
        args: {
          token: { type: GraphQLString }
        },
        resolve: ({ deviceCreated, deviceUpdated, deviceDeleted }) =>
          deviceCreated || deviceUpdated || deviceDeleted,
        subscribe: this.devicesRepo.subscribe([
          "deviceCreated",
          "deviceUpdated",
          "deviceDeleted"
        ])
      }
    };
  }
}

module.exports = Devices;
