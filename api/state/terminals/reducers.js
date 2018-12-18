"use strict";

const { combineReducers } = require("redux-immutable");
const { Map } = require("immutable");
const types = require("./types");

/* State Shape
Map({
  terminalId: Map({
    deviceId: String,
    userId: String,
    whenCreated: Number,
    client: SSH.Terminal,
    name: String,
    counter: Number,
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

const terminalReducer = combineReducers({
  deviceId: deviceIdReducer,
  userId: userIdReducer,
  whenCreated: whenCreatedReducer,
  client: clientReducer,
  name: nameReducer,
  counter: counterReducer
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
