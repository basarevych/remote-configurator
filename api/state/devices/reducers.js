"use strict";

const { combineReducers } = require("redux-immutable");
const { Map } = require("immutable");
const types = require("./types");

/* State Shape
Map({
  deviceId: Map({
    userId: String,
    client: Client, // ssh incoming client
    username: String,
    address: String,
    whenConnected: Number, // timestamp
    forwardedHost: String, // or null
    forwardedPort: Number, // or null
  })
})
*/

const userIdReducer = (state = null, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.userId)) return action.userId;
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

const usernameReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.username)) return action.username;
      break;
  }
  return state;
};

const addressReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.address)) return action.address;
      break;
  }
  return state;
};

const whenConnectedReducer = (state = 0, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.whenConnected)) return action.whenConnected;
      break;
  }
  return state;
};

const forwardedHostReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.forwardedHost)) return action.forwardedHost;
      break;
  }
  return state;
};

const forwardedPortReducer = (state = null, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.forwardedPort)) return action.forwardedPort;
      break;
  }
  return state;
};

const deviceReducer = combineReducers({
  userId: userIdReducer,
  client: clientReducer,
  username: usernameReducer,
  address: addressReducer,
  whenConnected: whenConnectedReducer,
  forwardedHost: forwardedHostReducer,
  forwardedPort: forwardedPortReducer
});

const devicesReducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.CREATE:
      if (action.deviceId && !state.has(action.deviceId)) {
        return state.withMutations(map =>
          map.set(action.deviceId, deviceReducer(undefined, action))
        );
      }
      break;
    case types.SET:
      if (action.deviceId && state.has(action.deviceId)) {
        return state.withMutations(map =>
          map.set(
            action.deviceId,
            deviceReducer(map.get(action.deviceId), action)
          )
        );
      }
      break;
    case types.REMOVE:
      return state.delete(action.deviceId);
  }
  return state;
};

module.exports = devicesReducer;
