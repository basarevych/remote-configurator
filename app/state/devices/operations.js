import Router from "next/router";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { appOperations, appSelectors } from "../app";
import { terminalsSelectors, terminalsOperations } from "../terminals";
import constants from "../../../common/constants";

export const clear = actions.clear;
export const set = actions.set;
export const showEditModal = actions.showEditModal;
export const hideEditModal = actions.hideEditModal;
export const showCredentialsModal = actions.showCredentialsModal;
export const hideCredentialsModal = actions.hideCredentialsModal;
export const showInteractiveModal = actions.showInteractiveModal;
export const hideInteractiveModal = actions.hideInteractiveModal;
export const setSelected = actions.setSelected;
export const selectAll = actions.selectAll;
export const deselectAll = actions.deselectAll;

export const editFirstSelected = () => async (dispatch, getState) => {
  let selected = selectors.getSelected(getState());
  if (selected.size) {
    return dispatch(
      actions.showEditModal({ deviceId: selected.first().get("id") })
    );
  }
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

export const load = ({ req } = {}) => async dispatch => {
  let devices;
  if (req) {
    devices = _.map(
      await req.di.get("repository.devices").getDevices(req),
      device =>
        _.assign({}, device, {
          whenCreated: device.whenCreated.valueOf(),
          whenUpdated: device.whenUpdated.valueOf()
        })
    );
  } else {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          query {
            devices {
              id
              name
            }
          }
        `
      )
    );
    devices = response && _.get(response, "data.devices");
  }
  await dispatch(actions.setList({ list: devices }));
};

export const reqCreate = ({ name, password }) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($name: String, $password: String) {
            createDevice(name: $name, password: $password) {
              success
            }
          }
        `,
        {
          name,
          password
        }
      )
    );

    if (response && _.get(response, "data.createDevice.success", false)) {
      await dispatch(actions.hideEditModal());
      return true;
    } else {
      result = {};
      let errors = response && _.get(response, "errors", []);
      for (let error of errors) {
        if (error && error.code === "E_VALIDATION")
          _.merge(result, error.details);
        else result._error = (result._error || []).concat([error.message]);
      }
      if (!_.keys(result).length) result = { _error: "EDIT_DEVICE_FAILED" };
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const reqEdit = ({ id, name, password }) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($id: String, $name: String, $password: String) {
            editDevice(id: $id, name: $name, password: $password) {
              success
            }
          }
        `,
        {
          id,
          name,
          password
        }
      )
    );

    if (response && _.get(response, "data.editDevice.success", false)) {
      await dispatch(actions.hideEditModal());
      return true;
    } else {
      result = {};
      let errors = response && _.get(response, "errors", []);
      for (let error of errors) {
        if (error && error.code === "E_VALIDATION")
          _.merge(result, error.details);
        else result._error = (result._error || []).concat([error.message]);
      }
      if (!_.keys(result).length) result = { _error: "EDIT_DEVICE_FAILED" };
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const reqRemove = ({ id }) => async dispatch => {
  let response = await dispatch(
    appOperations.gqlQuery(
      `
        mutation ($id: String) {
          deleteDevice(id: $id) {
            success
          }
        }
      `,
      {
        id
      }
    )
  );
  return (response && _.get(response, "data.deleteDevice.success")) || false;
};

export const startAuth = ({ deviceId }) => async dispatch => {
  return dispatch(showCredentialsModal({ deviceId }));
};

export const cancelAuth = () => async dispatch => {
  return dispatch(hideCredentialsModal());
};

export const finishAuth = ({ username, password }) => async (
  dispatch,
  getState
) => {
  const deviceId = selectors.getCredentialsModalDeviceId(getState());
  await dispatch(hideCredentialsModal());

  let socket = appSelectors.getService(getState(), { service: "socket" });
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
  getState
) => {
  const deviceId = selectors.getInteractiveModalDeviceId(getState());
  let socket = appSelectors.getService(getState(), { service: "socket" });
  if (socket && deviceId) {
    socket.emit(constants.messages.FINISH_AUTH, {
      deviceId,
      reply
    });
  }
};

export const openTerminal = ({ deviceId }) => async (dispatch, getState) => {
  let socket = appSelectors.getService(getState(), { service: "socket" });
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
}) => async (dispatch, getState) => {
  port = parseInt(port);
  if (!port) return;
  let socket = appSelectors.getService(getState(), { service: "socket" });
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

export const disconnect = ({ deviceId }) => async (dispatch, getState) => {
  let socket = appSelectors.getService(getState(), { service: "socket" });
  if (socket) {
    socket.emit(constants.messages.DISCONNECT_DEVICE, {
      deviceId
    });
  }
};
