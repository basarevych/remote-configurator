import Router from "next/router";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { terminalsSelectors, terminalsOperations } from "../../terminals/state";
import getFormErrors from "../../app/forms/getFormErrors";
import CreateDeviceMutation from "../mutations/CreateDevice";
import EditDeviceMutation from "../mutations/EditDevice";
import DeleteDeviceMutation from "../mutations/DeleteDevice";
import constants from "../../../common/constants";

export const clear = actions.clear;
export const set = actions.set;
export const showEditModal = actions.showEditModal;
export const hideEditModal = actions.hideEditModal;
export const showCredentialsModal = actions.showCredentialsModal;
export const hideCredentialsModal = actions.hideCredentialsModal;
export const setSelected = actions.setSelected;
export const selectAll = actions.selectAll;
export const deselectAll = actions.deselectAll;

export const editFirstSelected = () => async (dispatch, getState) => {
  let selected = selectors.getSelected(getState());
  if (selected.length)
    return dispatch(actions.showEditModal({ deviceId: selected[0] }));
};

export const remove = ({ deviceId }) => {
  return async (dispatch, getState) => {
    await Promise.all(
      // eslint-disable-next-line lodash/prefer-lodash-method
      terminalsSelectors
        .getTerminalsMap(getState())
        .map((terminal, terminalId) => {
          if (terminal.get("deviceId") === deviceId)
            return dispatch(terminalsOperations.remove({ terminalId }));
        })
        .toList()
        .filter(item => !!item)
        .toJS()
    );

    return dispatch(actions.remove({ deviceId }));
  };
};

export const reqCreate = ({ name, password }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await CreateDeviceMutation(di, {
    name,
    password
  });
  if (_.get(data, "data.createDevice.device.id", null)) {
    await dispatch(actions.hideEditModal());
    return true;
  }

  return getFormErrors(data);
};

export const reqEdit = ({ id, name, password }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await EditDeviceMutation(di, {
    id,
    name,
    password
  });
  if (_.get(data, "data.editDevice.device.id", null)) {
    await dispatch(actions.hideEditModal());
    return true;
  }

  return getFormErrors(data);
};

export const reqRemove = ({ id }) => async (dispatch, getState, di) => {
  let data = await DeleteDeviceMutation(di, { id });
  return !!_.get(data, "data.deleteDevice.device.id", null);
};

export const startAuth = ({ deviceId }) => async dispatch => {
  return dispatch(showCredentialsModal({ deviceId }));
};

export const cancelAuth = () => async dispatch => {
  return dispatch(hideCredentialsModal());
};

export const finishAuth = ({ username, password }) => async (
  dispatch,
  getState,
  di
) => {
  const deviceId = selectors.getCredentialsModalDeviceId(getState());
  await dispatch(hideCredentialsModal());

  let socket = di.get("socket");
  if (socket && deviceId) {
    socket.emit(constants.messages.CONNECT_DEVICE, {
      deviceId,
      username,
      password
    });
  }
};

export const doInteractiveAuth = ({ reply = "" } = {}) => async (
  dispatch,
  getState,
  di
) => {
  const deviceId = selectors.getInteractiveModalDeviceId(getState());
  let socket = di.get("socket");
  if (socket && deviceId) {
    socket.emit(constants.messages.FINISH_AUTH, {
      deviceId,
      reply
    });
  }
};

export const openTerminal = ({ deviceId }) => async (
  dispatch,
  getState,
  di
) => {
  let socket = di.get("socket");
  if (socket) {
    socket.emit(
      constants.messages.CONNECT_TERMINAL,
      { deviceId },
      async response => {
        if (response && response.id) {
          Router.push({
            pathname: "/terminal",
            query: { terminalId: response.id }
          });
        }
      }
    );
  }
};

export const openBrowser = ({
  deviceId,
  host,
  port,
  isAuthNeeded,
  username,
  password
}) => async (dispatch, getState, di) => {
  port = parseInt(port);
  if (!port) return;
  let socket = di.get("socket");
  if (socket) {
    socket.emit(
      constants.messages.CONNECT_BROWSER,
      { deviceId, host, port, isAuthNeeded, username, password },
      async response => {
        if (response) {
          Router.push({
            pathname: "/browser",
            query: { deviceId, host, port }
          });
        }
      }
    );
  }
};

export const disconnect = ({ deviceId }) => async (dispatch, getState, di) => {
  let socket = di.get("socket");
  if (socket) {
    socket.emit(constants.messages.DISCONNECT_DEVICE, {
      deviceId
    });
  }
};
