"use strict";

const { combineReducers } = require("redux-immutable");
const { Map, List } = require("immutable");
const uuid = require("uuid");
const types = require("./types");
const constants = require("../../../common/constants");

/* State Shape
Map({
  historyId: List([ // equals terminalId or cameraId
    Map({
      recordId: String,
      isError: Boolean,
      data: String,
    }),
    // ...
  ])
})
*/

const recordIdReducer = () => {
  return uuid.v4();
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
        list.push(
          recordReducer(undefined, _.assign({}, action, { data: action.data }))
        );
        if (list.size > constants.historySize) list.shift();
      });
  }
  return state;
};

const historiesReducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.ADD:
      return state.withMutations(map => {
        const id = action.historyId || action.terminalId;
        map.set(id, listReducer(map.get(id), action));
      });
    case types.DESTROY:
      return state.delete(action.historyId || action.terminalId);
  }
  return state;
};

module.exports = historiesReducer;
