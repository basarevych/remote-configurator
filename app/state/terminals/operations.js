import * as actions from "./actions";
import { appSelectors } from "../app";
import { historiesOperations } from "../histories";
import { activeTerminalOperations } from "../activeTerminal";
import constants from "../../../common/constants";

export const clear = actions.clear;
export const set = actions.set;

export const startSetupAuth = ({ deviceId }) => async dispatch => {
  return dispatch(
    activeTerminalOperations.set({
      deviceId,
      terminalId: null,
      isCollectingCredentials: true
    })
  );
};

export const cancelSetupAuth = ({ deviceId }) => async dispatch => {
  return dispatch(
    activeTerminalOperations.set({
      deviceId,
      terminalId: null,
      isCollectingCredentials: false
    })
  );
};

export const finishSetupAuth = ({ deviceId, username, password }) => async (
  dispatch,
  getState
) => {
  await dispatch(
    activeTerminalOperations.set({
      deviceId,
      terminalId: null,
      isCollectingCredentials: false
    })
  );

  let socket = appSelectors.getService(getState(), { service: "socket" });
  if (socket) {
    socket.emit(
      constants.messages.CONNECT_TERMINAL,
      { deviceId, username, password },
      async response => {
        if (response.id && response.name) {
          await dispatch(
            activeTerminalOperations.set({
              deviceId,
              terminalId: response.id,
              isCollectingCredentials: false
            })
          );
        }
      }
    );
  }
};

export const cancelKeyboardAuth = ({ terminalId }) => async (
  dispatch,
  getState
) => {
  await dispatch(
    set({
      terminalId,
      data: {
        isConnecting: false,
        isWaiting: false,
        isConnected: false,
        status: null,
        auth: null
      }
    })
  );

  let socket = appSelectors.getService(getState(), { service: "socket" });
  if (socket) {
    socket.emit(constants.messages.KEYBOARD_AUTH, {
      terminalId,
      reply: null
    });
  }
};

export const finishKeyboardAuth = ({ terminalId, reply }) => async (
  dispatch,
  getState
) => {
  await dispatch(
    set({
      terminalId,
      data: {
        isConnecting: true,
        isWaiting: true,
        isConnected: false,
        status: null,
        auth: null
      }
    })
  );

  let socket = appSelectors.getService(getState(), { service: "socket" });
  if (socket) {
    socket.emit(constants.messages.KEYBOARD_AUTH, {
      terminalId,
      reply
    });
  }
};

export const sendInput = ({ terminalId, data }) => async (
  dispatch,
  getState
) => {
  let socket = appSelectors.getService(getState(), { service: "socket" });
  if (socket) {
    socket.emit(constants.messages.TERMINAL_INPUT, { terminalId, data });
  }
};

export const sendResize = ({ terminalId, cols, rows, width, height }) => async (
  dispatch,
  getState
) => {
  let socket = appSelectors.getService(getState(), { service: "socket" });
  if (socket) {
    socket.emit(constants.messages.TERMINAL_RESIZED, {
      terminalId,
      cols,
      rows,
      width,
      height
    });
  }
};

export const kill = ({ terminalId }) => async (dispatch, getState) => {
  let socket = appSelectors.getService(getState(), { service: "socket" });
  if (socket) {
    socket.emit(constants.messages.DISCONNECT_TERMINAL, {
      terminalId
    });
  }
};

export const remove = ({ terminalId }) => async dispatch => {
  await dispatch(historiesOperations.remove({ terminalId }));
  return dispatch(actions.remove({ terminalId }));
};
