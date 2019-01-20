import * as types from "./types";

export const clear = () => ({ type: types.CLEAR });

export const set = data => _.assign({ type: types.SET }, data);

export const remove = ({ terminalId }) => ({
  type: types.REMOVE,
  terminalId
});
