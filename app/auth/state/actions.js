import * as types from "./types";

export const setCsrf = ({ csrf }) => ({
  type: types.SET_CSRF,
  csrf
});

export const setStatus = status => ({
  type: types.SET_STATUS,
  ...status
});
