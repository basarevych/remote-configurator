import { List, fromJS } from "immutable";
import { combineReducers } from "redux-immutable";
import * as types from "./types";

/* State Shape
Map({
  csrf: String,
  isAuthenticated: Boolean,
  login: String,
  roles: List([String]),
  googleMapsKey: null,
})
*/

const csrfReducer = (state = "", action) => {
  switch (action.type) {
    case types.SET_CSRF:
      if (!_.isUndefined(action.csrf)) return action.csrf;
      break;
  }
  return state;
};

const isAuthenticatedReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.isAuthenticated)) return action.isAuthenticated;
      break;
  }
  return state;
};

const loginReducer = (state = "", action) => {
  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.login)) return action.login;
      break;
  }
  return state;
};

const rolesReducer = (state = List([]), action) => {
  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.roles)) return fromJS(action.roles);
      break;
  }
  return state;
};

const reducer = combineReducers({
  csrf: csrfReducer,
  isAuthenticated: isAuthenticatedReducer,
  login: loginReducer,
  roles: rolesReducer
});

export default reducer;
