import { combineReducers } from "redux-immutable";
import * as types from "./types";

/* State Shape
Map({
  deviceId: null,
  terminalId: null,
  isCollectingCredentails: false,
})
*/

const deviceIdReducer = (state = null, action) => {
  switch (action.type) {
    case types.SET:
      return action.deviceId || null;
  }
  return state;
};

const terminalIdReducer = (state = null, action) => {
  switch (action.type) {
    case types.SET:
      return action.terminalId || null;
  }
  return state;
};

const isCollectingCredentialsReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET:
      return action.isCollectingCredentials || false;
  }
  return state;
};

const reducer = combineReducers({
  deviceId: deviceIdReducer,
  terminalId: terminalIdReducer,
  isCollectingCredentials: isCollectingCredentialsReducer
});

export default reducer;
