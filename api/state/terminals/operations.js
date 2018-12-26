"use strict";

const uuid = require("uuid");
const actions = require("./actions");
const selectors = require("./selectors");
const appSelectors = require("../app/selectors");
const devicesSelectors = require("../devices/selectors");
const historiesOperations = require("../histories/operations");

const set = actions.set;

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

const create = ({ deviceId, userId }) => {
  return async (dispatch, getState) => {
    let terminalId = uuid.v4();

    let counter =
      devicesSelectors.getTerminalCounter(getState(), { deviceId }) + 1;

    let name =
      devicesSelectors.getName(getState(), { deviceId }) + " #" + counter;

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

    try {
      if (await client.start()) return { id: terminalId, name };
    } catch (error) {
      console.error(error);
      remove({ terminalId });
    }
    return {};
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

module.exports = {
  create,
  set,
  sendInput,
  resize,
  remove
};
