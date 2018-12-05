"use strict";

const debug = require("debug")("app:auth");

module.exports = {
  query: {
    status: async (parent, args, context) => {
      debug("status");
      return context.di.get("repository.auth").getStatus(context, args);
    }
  },
  mutation: {
    signIn: async (parent, args, context) => {
      debug("signIn");
      return context.di.get("repository.auth").signIn(context, args);
    },

    signOut: async (parent, args, context) => {
      debug("signOut");
      return context.di.get("repository.auth").signOut(context, args);
    }
  }
};
