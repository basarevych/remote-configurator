import { combineReducers } from "redux-immutable";
import { Map } from "immutable";
import * as types from "./types";

/* State Shape
Map({
  online: Map({
    terminalId: Map({
      deviceId: String,
      name: String,
    })
  })
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

const terminalReducer = combineReducers({
  deviceId: deviceIdReducer,
  whenCreated: whenCreatedReducer,
  name: nameReducer
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
