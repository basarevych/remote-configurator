"use strict";

const { applyMiddleware, createStore } = require("redux");
const { combineReducers } = require("redux-immutable");
const thunk = require("redux-thunk").default;
const { usersReducer } = require("./users");
const { devicesReducer } = require("./devices");
const { terminalsReducer } = require("./terminals");
const { historiesReducer } = require("./histories");
const { proxiesReducer } = require("./proxies");

let rootReducer = combineReducers({
  users: usersReducer,
  devices: devicesReducer,
  terminals: terminalsReducer,
  histories: historiesReducer,
  proxies: proxiesReducer
});

module.exports = (di, initialState) => {
  const middleware = applyMiddleware(thunk.withExtraArgument(di));
  const store = createStore(rootReducer, initialState || undefined, middleware);
  di.registerInstance(store, "store");
  di.registerInstance(store.getState.bind(store), "getState");
  di.registerInstance(store.dispatch.bind(store), "dispatch");
  return store;
};
