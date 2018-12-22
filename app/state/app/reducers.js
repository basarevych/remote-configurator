import { combineReducers } from "redux-immutable";
import * as types from "./types";
import l10n from "../../../common/locales";

/* State Shape
Map({
  created: Number, // timestamp
  appOrigin: String,
  sshHost: String,
  sshPort: Number,
  selfRegistration: Boolean,
  di: DiContainer,
  locale: String,
  statusCode: Number, // current HTTP status code
  isStarted: Boolean,
  isConnected: Boolean, // WebSocket
})
*/

const createdReducer = (state = Date.now(), action) => {
  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.created)) return action.created;
      break;
  }
  return state;
};

const appOriginReducer = (state = "localhost", action) => {
  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.appOrigin)) return action.appOrigin;
      break;
  }
  return state;
};

const sshHostReducer = (state = "localhost", action) => {
  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.sshHost)) return action.sshHost;
      break;
  }
  return state;
};

const sshPortReducer = (state = 22, action) => {
  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.sshPort)) return action.sshPort;
      break;
  }
  return state;
};

const selfRegistrationReducer = (state = false, action) => {
  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.selfRegistration))
        return action.selfRegistration;
      break;
  }
  return state;
};

const diReducer = (state = null, action) => {
  switch (action.type) {
    case types.INIT:
      if (!_.isUndefined(action.di)) return action.di;
      break;
  }
  return state;
};

const localeReducer = (state = l10n.defaultLocale, action) => {
  switch (action.type) {
    case types.SET_LOCALE:
      if (!_.isUndefined(action.locale)) return action.locale;
      break;
  }
  return state;
};

const statusCodeReducer = (state = 200, action) => {
  switch (action.type) {
    case types.SET_STATUS_CODE:
      if (_.isFinite(action.code) && action.code >= 200) return action.code;
      break;
  }
  return state;
};

const isStartedReducer = (state = false, action) => {
  switch (action.type) {
    case types.START:
      return true;
    case types.STOP:
      return false;
  }
  return state;
};

const isConnectedReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET_CONNECTED:
      if (!_.isUndefined(action.isConnected)) return action.isConnected;
      break;
  }
  return state;
};

const reducer = combineReducers({
  created: createdReducer,
  appOrigin: appOriginReducer,
  sshHost: sshHostReducer,
  sshPort: sshPortReducer,
  selfRegistration: selfRegistrationReducer,
  di: diReducer,
  locale: localeReducer,
  statusCode: statusCodeReducer,
  isStarted: isStartedReducer,
  isConnected: isConnectedReducer
});

export default reducer;
