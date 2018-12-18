"use strict";

const proxiesReducer = require("./reducers");

const proxiesTypes = require("./types");
const proxiesOperations = require("./operations");
const proxiesSelectors = require("./selectors");

module.exports = {
  proxiesReducer,
  proxiesTypes,
  proxiesOperations,
  proxiesSelectors
};
