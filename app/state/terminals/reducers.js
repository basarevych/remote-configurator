import { combineReducers } from "redux-immutable";
import { Map, fromJS } from "immutable";
import * as types from "./types";

/* State Shape
Map({
  online: Map({
    terminalId: Map({
      deviceId: String,
      name: String,
      isConnecting: Boolean, // true when started connecting
      isWaiting: Boolean, // true after keyboard auth stage
      isConnected: Boolean, // true when logged in
      status: String, // or null
      auth: Map({ // or null if not requested
        username: String,
        banner: String,
        prompts: List([String]),
      }),
    })
  })
})
*/

const authUsernameReducer = (state = null, action) => {
  let tmp;
  switch (action.type) {
    case types.SET:
      tmp = action.auth;
      if (!_.isUndefined(tmp)) return tmp && tmp.username ? tmp.username : null;
      break;
  }
  return state;
};

const authBannerReducer = (state = null, action) => {
  let tmp;
  switch (action.type) {
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

const whenCreatedReducer = (state = Date.now()) => {
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
  whenCreated: whenCreatedReducer,
  name: nameReducer,
  isConnecting: isConnectingReducer,
  isWaiting: isWaitingReducer,
  isConnected: isConnectedReducer,
  status: statusReducer,
  auth: authReducer
});

const onlineReducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.CLEAR:
      return Map({});
    case types.SET:
      return state.withMutations(map =>
        map.set(
          action.terminalId,
          terminalReducer(
            map.get(action.terminalId),
            _.assign({ type: types.SET }, action.data)
          )
        )
      );
    case types.REMOVE:
      return state.delete(action.terminalId);
  }
  return state;
};

const reducer = combineReducers({
  online: onlineReducer
});

export default reducer;
