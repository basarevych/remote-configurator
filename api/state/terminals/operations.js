"use strict";

const uuid = require("uuid");
const actions = require("./actions");
const selectors = require("./selectors");
const appSelectors = require("../app/selectors");
const devicesSelectors = require("../devices/selectors");
const historiesOperations = require("../histories/operations");

const set = actions.set;

const create = ({ deviceId, userId, username, password }) => {
  return async (dispatch, getState) => {
    let terminalId = uuid.v4();

    let counter =
      devicesSelectors.getTerminalCounter(getState(), { deviceId }) + 1;

    let name =
      devicesSelectors.getUsername(getState(), { deviceId }) + " #" + counter;

    let client = appSelectors.getService(getState(), {
      service: "ssh.terminal",
      params: [terminalId]
    });
    if (!client) return {};

    await dispatch(
      actions.create({
        deviceId,
        terminalId,
        userId,
        name,
        counter,
        client
      })
    );

    client.start(username, password).catch(console.error);

    return { id: terminalId, name };
  };
};

const finishAuth = ({ terminalId, reply }) => {
  return async (dispatch, getState) => {
    let finish = selectors.getFinish(getState(), { terminalId });
    if (finish) {
      try {
        finish([reply || ""]);
      } catch (error) {
        console.error(error);
      }
      return dispatch(set({ terminalId, auth: null }));
    }
  };
};

const sendInput = ({ terminalId, data }) => {
  return async (dispatch, getState) => {
    let client = selectors.getClient(getState(), { terminalId });
    if (client) client.write(data);
  };
};

const resize = ({ terminalId, rows, cols, height, width }) => {
  return async (dispatch, getState) => {
    let client = selectors.getClient(getState(), { terminalId });
    if (client) client.setWindow(rows, cols, height, width);
  };
};

const remove = ({ terminalId }) => {
  return async (dispatch, getState) => {
    let client = selectors.getClient(getState(), { terminalId });
    if (client) {
      try {
        client.signal("KILL");
        client.signal("HUP");
        client.write(`\x03\x03\nexit\n`);
      } catch (unusedError) {
        // do nothing
      }
      client.stop().catch(console.error);
    }
    await dispatch(historiesOperations.destroy({ terminalId }));
    return dispatch(actions.remove({ terminalId }));
  };
};

module.exports = {
  create,
  set,
  finishAuth,
  sendInput,
  resize,
  remove
};
