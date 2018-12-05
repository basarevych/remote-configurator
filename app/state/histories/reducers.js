import { combineReducers } from "redux-immutable";
import { Map, List } from "immutable";
import uuid from "uuid";
import * as types from "./types";
import constants from "../../../common/constants";

/* State Shape
Map({
  historyId: List([ // equals terminalId or cameraId
    {
      recordId: string,
      isError: Boolean,
      data: String,
    },
  ])
})
*/

const recordIdReducer = (state = uuid.v4(), action) => {
  switch (action.type) {
    case types.ADD:
      if (!_.isUndefined(action.recordId)) return action.recordId;
      break;
  }
  return state;
};

const isErrorReducer = (state = false, action) => {
  switch (action.type) {
    case types.ADD:
      if (!_.isUndefined(action.isError)) return action.isError;
      break;
  }
  return state;
};

const dataReducer = (state = "", action) => {
  switch (action.type) {
    case types.ADD:
      if (!_.isUndefined(action.data)) return action.data;
      break;
  }
  return state;
};

const recordReducer = combineReducers({
  recordId: recordIdReducer,
  isError: isErrorReducer,
  data: dataReducer
});

const listReducer = (state = List([]), action) => {
  switch (action.type) {
    case types.ADD:
      return state.withMutations(list => {
        let data = _.isArray(action.data) ? action.data : [action.data];
        for (let item of data) {
          // eslint-disable-next-line lodash/prefer-lodash-method
          if (list.find(el => el.get("recordId") === item.recordId)) continue;
          list.push(
            recordReducer(undefined, _.assign({ type: types.ADD }, item))
          );
          if (list.size > constants.historySize) list.shift();
        }
      });
  }
  return state;
};

const historiesReducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.CLEAR:
      return Map({});
    case types.ADD:
      return state.withMutations(map => {
        const id = action.historyId || action.terminalId;
        map.set(id, listReducer(map.get(id), action));
      });
    case types.REMOVE:
      return state.delete(action.historyId || action.terminalId);
    case types.REMOVE_STARTING:
      return state.withMutations(map => {
        for (let id of map.keys()) {
          if (_.startsWith(id, action.historyId || action.terminalId))
            map.delete(id);
        }
      });
  }
  return state;
};

export default historiesReducer;
