"use strict";

const date = require("./date");
const auth = require("./auth");
const users = require("./users");
const devices = require("./devices");

module.exports = {
  Date: date,
  Query: _.merge({}, auth.query, users.query, devices.query),
  Mutation: _.merge({}, auth.mutation, users.mutation, devices.mutation)
};
