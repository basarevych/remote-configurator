"use strict";

const { combineReducers } = require("redux-immutable");
const { Map } = require("immutable");
const types = require("./types");

/* State Shape
Map({
  proxyId: Map({
    deviceId: String,
    userId: String,
    whenCreated: Number,
    forwardedHost: String,
    forwardedPort: Number,
    secret: String,
    random: String,
    username: String,
    isAuthNeeded: Boolean,
    authUsername: String,
    authPassword: String,
    exec: SSH.Exec, // shell command to reverse ssh the port on the device
    client: SSH.Client, // connected ssh for that port
    proxy: Proxy,
  }
})
*/

const deviceIdReducer = (state = null, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.deviceId)) return action.deviceId;
      break;
  }
  return state;
};

const userIdReducer = (state = null, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.userId)) return action.userId;
      break;
  }
  return state;
};

const whenCreatedReducer = (state = Date.now()) => {
  return state;
};

const forwardedHostReducer = (state = "localhost", action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.forwardedHost)) return action.forwardedHost;
      break;
  }
  return state;
};

const forwardedPortReducer = (state = 0, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.forwardedPort)) return action.forwardedPort;
      break;
  }
  return state;
};

const secretReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.secret)) return action.secret;
      break;
  }
  return state;
};

const randomReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.random)) return action.random;
      break;
  }
  return state;
};

const usernameReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.username)) return action.username;
      break;
  }
  return state;
};

const isAuthNeededReducer = (state = false, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.isAuthNeeded)) return action.isAuthNeeded;
      break;
  }
  return state;
};

const authUsernameReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.authUsername)) return action.authUsername;
      break;
  }
  return state;
};

const authPasswordReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.authPassword)) return action.authPassword;
      break;
  }
  return state;
};

const execReducer = (state = null, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.exec)) return action.exec;
      break;
  }
  return state;
};

const clientReducer = (state = null, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.client)) return action.client;
      break;
  }
  return state;
};

const proxyFieldReducer = (state = null, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.proxy)) return action.proxy;
      break;
  }
  return state;
};

const proxyReducer = combineReducers({
  deviceId: deviceIdReducer,
  userId: userIdReducer,
  whenCreated: whenCreatedReducer,
  forwardedHost: forwardedHostReducer,
  forwardedPort: forwardedPortReducer,
  secret: secretReducer,
  random: randomReducer,
  username: usernameReducer,
  isAuthNeeded: isAuthNeededReducer,
  authUsername: authUsernameReducer,
  authPassword: authPasswordReducer,
  exec: execReducer,
  client: clientReducer,
  proxy: proxyFieldReducer
});

const proxiesReducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.CREATE:
      if (action.proxyId && !state.has(action.proxyId)) {
        return state.withMutations(map =>
          map.set(action.proxyId, proxyReducer(undefined, action))
        );
      }
      break;
    case types.SET:
      if (action.proxyId && state.has(action.proxyId)) {
        return state.withMutations(map =>
          map.set(action.proxyId, proxyReducer(map.get(action.proxyId), action))
        );
      }
      break;
    case types.REMOVE:
      return state.delete(action.proxyId);
  }
  return state;
};

module.exports = proxiesReducer;
