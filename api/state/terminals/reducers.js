"use strict";

const { combineReducers } = require("redux-immutable");
const { fromJS, Map } = require("immutable");
const types = require("./types");

/* State Shape
Map({
  terminalId: Map({
    deviceId: String,
    userId: String,
    client: Terminal,
    name: String,
    counter: Number,
    isConnecting: Boolean,
    isWaiting: Boolean,
    isConnected: Boolean,
    status: String, // or null
    auth: Map({ // or null if not requested
      username: String,
      finish: Function,
      banner: String,
      prompts: List([String]),
    }),
  }
})
*/

const authUsernameReducer = (state = null, action) => {
  let tmp;
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      tmp = action.auth;
      if (!_.isUndefined(tmp)) return tmp && tmp.username ? tmp.username : null;
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
  username: authUsernameReducer,
  finish: authFinishReducer,
  banner: authBannerReducer,
  prompts: authPromptsReducer
});

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

const clientReducer = (state = null, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.client)) return action.client;
      break;
  }
  return state;
};

const nameReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.name)) return action.name;
      break;
  }
  return state;
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.counter)) return action.counter;
      break;
  }
  return state;
};

const isConnectingReducer = (state = false, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.isConnecting)) return action.isConnecting;
      break;
  }
  return state;
};

const isWaitingReducer = (state = false, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.isWaiting)) return action.isWaiting;
      break;
  }
  return state;
};

const isConnectedReducer = (state = false, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.isConnected)) return action.isConnected;
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

const terminalReducer = combineReducers({
  deviceId: deviceIdReducer,
  userId: userIdReducer,
  client: clientReducer,
  name: nameReducer,
  counter: counterReducer,
  isConnecting: isConnectingReducer,
  isWaiting: isWaitingReducer,
  isConnected: isConnectedReducer,
  status: statusReducer,
  auth: authReducer
});

const terminalsReducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.CREATE:
      if (action.terminalId && !state.has(action.terminalId)) {
        return state.withMutations(map =>
          map.set(action.terminalId, terminalReducer(undefined, action))
        );
      }
      break;
    case types.SET:
      if (action.terminalId && state.has(action.terminalId)) {
        return state.withMutations(map =>
          map.set(
            action.terminalId,
            terminalReducer(map.get(action.terminalId), action)
          )
        );
      }
      break;
    case types.REMOVE:
      return state.delete(action.terminalId);
  }
  return state;
};

module.exports = terminalsReducer;
