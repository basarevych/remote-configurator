import { combineReducers } from "redux-immutable";
import { Map, List, fromJS } from "immutable";
import * as types from "./types";

/* State Shape
Map({
  list: List([
    Map({
      id: String,
      name: String,
    })
  ]),
  online: Map({
    deviceId: Map({
      name: String,
    }),
  })
  editModalDeviceId: String, // null when creating a new device
  isEditModalOpen: false,
})
*/

const listReducer = (state = List([]), action) => {
  switch (action.type) {
    case types.SET_LIST:
      if (!_.isUndefined(action.list)) return fromJS(action.list);
      break;
  }
  return state;
};

const nameReducer = (state = null, action) => {
  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.name)) return action.name;
      break;
  }
  return state;
};

const deviceReducer = combineReducers({
  name: nameReducer
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

const reducer = combineReducers({
  list: listReducer,
  online: onlineReducer,
  editModalDeviceId: editModalDeviceIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});

export default reducer;
