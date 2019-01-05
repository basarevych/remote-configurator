const EventEmitter = require("events");

class Devices extends EventEmitter {
  constructor(devicesRepo) {
    super();

    this.devicesRepo = devicesRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.devices";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["repository.devices"];
  }

  async gql() {
    return {
      Query: {
        devices: async (parent, args, context) =>
          this.devicesRepo.getDevices(context, args)
      },
      Mutation: {
        createDevice: async (parent, args, context) =>
          this.devicesRepo.createDevice(context, args),
        editDevice: async (parent, args, context) =>
          this.devicesRepo.editDevice(context, args),
        deleteDevice: async (parent, args, context) =>
          this.devicesRepo.deleteDevice(context, args)
      }
    };
  }
}

module.exports = Devices;
