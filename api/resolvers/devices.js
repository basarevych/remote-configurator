"use strict";

const debug = require("debug")("app:devices");

module.exports = {
  query: {
    devices: async (parent, args, context) => {
      debug("devices");
      return context.di.get("repository.devices").getDevices(context, args);
    }
  },
  mutation: {
    createDevice: async (parent, args, context) => {
      debug("createDevice");
      return context.di.get("repository.devices").createDevice(context, args);
    },

    editDevice: async (parent, args, context) => {
      debug("editDevice");
      return context.di.get("repository.devices").editDevice(context, args);
    },

    deleteDevice: async (parent, args, context) => {
      debug("deleteDevice");
      return context.di.get("repository.devices").deleteDevice(context, args);
    }
  }
};
