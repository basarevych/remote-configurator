import * as types from "./types";

export const set = ({ deviceId, terminalId, isCollectingCredentials }) => {
  return {
    type: types.SET,
    deviceId,
    terminalId,
    isCollectingCredentials
  };
};
