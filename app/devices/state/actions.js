import * as types from "./types";

export const clear = () => ({ type: types.CLEAR });

export const set = data => _.assign({ type: types.SET }, data);

export const remove = ({ deviceId }) => {
  return {
    type: types.REMOVE,
    deviceId
  };
};

export const setSelected = ({ deviceId, isSelected }) => ({
  type: types.SET_SELECTED,
  deviceId,
  isSelected
});

export const selectAll = ({ deviceIds }) => ({
  type: types.SELECT_ALL,
  deviceIds
});

export const deselectAll = ({ exceptDeviceIds }) => ({
  type: types.DESELECT_ALL,
  exceptDeviceIds
});

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
