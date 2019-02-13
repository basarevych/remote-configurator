import { Map, Set, fromJS } from "immutable";
import { combineReducers } from "redux-immutable";
import * as types from "./types";

/* State Shape
Map({
  online: Map({
    deviceId: Map({
      name: String,
      status: String, // or null
      address: String,
      isLoggingIn: Boolean,
      isLoggedIn: Boolean,
      auth: Map({
        banner: String, // or null
        prompts: List([String]), // or null if not requested
      }),
    }),
  })
  selected: Set([String]), // IDs
  editModalDeviceId: String, // null when creating a new device
  isEditModalOpen: false,
  credentialsModalDeviceId: String,
  isCredentialsModalOpen: false,
})
*/

const nameReducer = (state = "", action) => {
  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.name)) return action.name;
      break;
  }
  return state;
};

const statusReducer = (state = "", action) => {
  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.status)) return action.status;
      break;
  }
  return state;
};

const addressReducer = (state = null, action) => {
  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.address)) return action.address;
      break;
  }
  return state;
};

const isLoggingInReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.isLoggingIn)) return action.isLoggingIn;
      break;
  }
  return state;
};

const isLoggedInReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.isLoggedIn)) return action.isLoggedIn;
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
  banner: authBannerReducer,
  prompts: authPromptsReducer
});

const deviceReducer = combineReducers({
  name: nameReducer,
  status: statusReducer,
  address: addressReducer,
  isLoggingIn: isLoggingInReducer,
  isLoggedIn: isLoggedInReducer,
  auth: authReducer
});

const onlineReducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.CLEAR:
      return Map({});
    case types.SET:
      return state.withMutations(map =>
        map.set(
          action.deviceId,
          deviceReducer(
            map.get(action.deviceId),
            _.assign({ type: types.SET }, action.data)
          )
        )
      );
    case types.REMOVE:
      return state.delete(action.deviceId);
  }
  return state;
};

const selectedReducer = (state = Set([]), action) => {
  switch (action.type) {
    case types.SET_SELECTED:
      if (
        !_.isUndefined(action.deviceId) &&
        !_.isUndefined(action.isSelected)
      ) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        if (state.includes(action.deviceId))
          return state.delete(action.deviceId);
        else return state.add(action.deviceId);
      }
      break;
    case types.SELECT_ALL:
      if (!_.isUndefined(action.deviceIds)) return Set(action.deviceIds);
      break;
    case types.DESELECT_ALL:
      if (_.isUndefined(action.exceptDeviceIds)) {
        return Set([]);
      } else {
        return state.withMutations(set => {
          for (let item of set.values())
            if (!_.includes(action.exceptDeviceIds, item)) set.delete(item);
        });
      }
  }
  return state;
};

const editModalDeviceIdReducer = (state = null, action) => {
  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return action.deviceId || null;
  }
  return state;
};

const isEditModalOpenReducer = (state = false, action) => {
  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return true;
    case types.HIDE_EDIT_MODAL:
      return false;
  }
  return state;
};

const credentialsModalDeviceIdReducer = (state = null, action) => {
  switch (action.type) {
    case types.SHOW_CREDENTIALS_MODAL:
      return action.deviceId || null;
  }
  return state;
};

const isCredentialsModalOpenReducer = (state = false, action) => {
  switch (action.type) {
    case types.SHOW_CREDENTIALS_MODAL:
      return true;
    case types.HIDE_CREDENTIALS_MODAL:
      return false;
  }
  return state;
};

const reducer = combineReducers({
  online: onlineReducer,
  selected: selectedReducer,
  editModalDeviceId: editModalDeviceIdReducer,
  isEditModalOpen: isEditModalOpenReducer,
  credentialsModalDeviceId: credentialsModalDeviceIdReducer,
  isCredentialsModalOpen: isCredentialsModalOpenReducer
});

export default reducer;
