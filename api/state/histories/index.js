"use strict";

const historiesReducer = require("./reducers");

const historiesTypes = require("./types");
const historiesOperations = require("./operations");
const historiesSelectors = require("./selectors");

module.exports = {
  historiesReducer,
  historiesTypes,
  historiesOperations,
  historiesSelectors
};
