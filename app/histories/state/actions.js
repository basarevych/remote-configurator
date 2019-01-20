import * as types from "./types";

export const clear = () => ({ type: types.CLEAR });

export const add = ({ historyId, terminalId, data }) => ({
  type: types.ADD,
  historyId,
  terminalId,
  data
});

export const remove = ({ historyId, terminalId }) => {
  return {
    type: types.REMOVE,
    historyId,
    terminalId
  };
};

export const removeStarting = ({ historyId, terminalId }) => {
  return {
    type: types.REMOVE_STARTING,
    historyId,
    terminalId
  };
};
