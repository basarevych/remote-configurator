import { combineReducers } from "redux-immutable";
import { Map, List, fromJS } from "immutable";
import * as types from "./types";

/* State Shape
Map({
  list: List([
    Map({
      id: String,
      isSelected: Boolean,
      name: String,
    })
  ]),
  online: Map({
    deviceId: Map({
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
  editModalDeviceId: String, // null when creating a new device
  isEditModalOpen: false,
  credentialsModalDeviceId: String,
  isCredentialsModalOpen: false,
})
*/

const listReducer = (state = List([]), action) => {
  switch (action.type) {
    case types.SET_LIST:
      if (!_.isUndefined(action.list))
        // eslint-disable-next-line lodash/prefer-lodash-method
        return fromJS(action.list).map((item, index) =>
          item.set("isSelected", !!state.getIn([index, "isSelected"]))
        );
      break;
    case types.SET_SELECTED:
      if (!_.isUndefined(action.deviceId))
        return state.withMutations(list => {
          // eslint-disable-next-line lodash/prefer-lodash-method
          let index = list.findIndex(
            item => item.get("id") === action.deviceId
          );
          if (index !== -1)
            list.setIn([index, "isSelected"], !!action.isSelected);
        });
      break;
    case types.SELECT_ALL:
      // eslint-disable-next-line lodash/prefer-lodash-method
      return state.map(item => item.set("isSelected", true));
    case types.DESELECT_ALL:
      // eslint-disable-next-line lodash/prefer-lodash-method
      return state.map(item => item.set("isSelected", false));
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
  list: listReducer,
  online: onlineReducer,
  editModalDeviceId: editModalDeviceIdReducer,
  isEditModalOpen: isEditModalOpenReducer,
  credentialsModalDeviceId: credentialsModalDeviceIdReducer,
  isCredentialsModalOpen: isCredentialsModalOpenReducer
});

export default reducer;
