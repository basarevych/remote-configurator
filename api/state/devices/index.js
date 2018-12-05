"use strict";

const devicesReducer = require("./reducers");

const devicesTypes = require("./types");
const devicesOperations = require("./operations");
const devicesSelectors = require("./selectors");

module.exports = {
  devicesReducer,
  devicesTypes,
  devicesOperations,
  devicesSelectors
};
