"use strict";

const { applyMiddleware, createStore } = require("redux");
const { combineReducers } = require("redux-immutable");
const thunk = require("redux-thunk").default;
const { appReducer } = require("./app");
const { usersReducer } = require("./users");
const { devicesReducer } = require("./devices");
const { terminalsReducer } = require("./terminals");
const { historiesReducer } = require("./histories");

let rootReducer = combineReducers({
  app: appReducer,
  users: usersReducer,
  devices: devicesReducer,
  terminals: terminalsReducer,
  histories: historiesReducer
});

let middleware = applyMiddleware(thunk);

module.exports = initialState =>
  createStore(rootReducer, initialState, middleware);
