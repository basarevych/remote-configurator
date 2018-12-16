import * as types from "./types";

export const setList = ({ list }) => ({ type: types.SET_LIST, list });

export const setSelected = ({ deviceId, isSelected }) => ({
  type: types.SET_SELECTED,
  deviceId,
  isSelected
});

export const selectAll = () => ({ type: types.SELECT_ALL });

export const deselectAll = () => ({ type: types.DESELECT_ALL });

export const clear = () => ({ type: types.CLEAR });

export const set = data => _.assign({ type: types.SET }, data);

export const remove = ({ deviceId }) => {
  return {
    type: types.REMOVE,
    deviceId
  };
};

export const showEditModal = ({ deviceId } = {}) => ({
  type: types.SHOW_EDIT_MODAL,
  deviceId
});

export const hideEditModal = () => ({ type: types.HIDE_EDIT_MODAL });

export const showCredentialsModal = ({ deviceId } = {}) => ({
  type: types.SHOW_CREDENTIALS_MODAL,
  deviceId
});

export const hideCredentialsModal = () => ({
  type: types.HIDE_CREDENTIALS_MODAL
});
