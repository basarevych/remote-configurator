"use strict";

const { combineReducers } = require("redux-immutable");
const { Map, fromJS } = require("immutable");
const types = require("./types");

/* State Shape
Map({
  deviceId: Map({
    userId: String,
    client: Client, // ssh incoming client
    status: String, // or null
    username: String,
    address: String,
    whenConnected: Number, // timestamp
    forwardedHost: String, // or null
    forwardedPort: Number, // or null
    remoteUsername: String, // or null
    remotePassword: String, // or null
    isLoggingIn: Boolean,
    isLoggedIn: Boolean,
    auth: Map({ // or null if not requested
      finish: Function,
      banner: String,
      prompts: List([String]),
    }),
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

const statusReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.status)) return action.status;
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

const remoteUsernameReducer = (state = null, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.remoteUsername)) return action.remoteUsername;
      break;
  }
  return state;
};

const remotePasswordReducer = (state = null, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.remotePassword)) return action.remotePassword;
      break;
  }
  return state;
};

const isLoggingInReducer = (state = false, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.isLoggingIn)) return action.isLoggingIn;
      break;
  }
  return state;
};

const isLoggedInReducer = (state = false, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.isLoggedIn)) return action.isLoggedIn;
      break;
  }
  return state;
};

const authFinishReducer = (state = null, action) => {
  let tmp;
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      tmp = action.auth;
      if (!_.isUndefined(tmp)) return tmp && tmp.finish ? tmp.finish : null;
      break;
  }
  return state;
};

const authBannerReducer = (state = null, action) => {
  let tmp;
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      tmp = action.auth;
      if (!_.isUndefined(tmp)) return tmp && tmp.banner ? tmp.banner : null;
      break;
  }
  return state;
};

const authPromptsReducer = (state = null, action) => {
  let tmp;
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      tmp = action.auth;
      if (!_.isUndefined(tmp))
        return tmp && tmp.prompts ? fromJS(tmp.prompts) : null;
      break;
  }
  return state;
};

const authReducer = combineReducers({
  finish: authFinishReducer,
  banner: authBannerReducer,
  prompts: authPromptsReducer
});

const deviceReducer = combineReducers({
  userId: userIdReducer,
  client: clientReducer,
  status: statusReducer,
  username: usernameReducer,
  address: addressReducer,
  whenConnected: whenConnectedReducer,
  forwardedHost: forwardedHostReducer,
  forwardedPort: forwardedPortReducer,
  remoteUsername: remoteUsernameReducer,
  remotePassword: remotePasswordReducer,
  isLoggingIn: isLoggingInReducer,
  isLoggedIn: isLoggedInReducer,
  auth: authReducer
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
