"use strict";

const actions = require("./actions");
const selectors = require("./selectors");
const appSelectors = require("../app/selectors");
const terminalsOperations = require("../terminals/operations");
const terminalsSelectors = require("../terminals/selectors");

const create = actions.create;

const set = actions.set;

const remove = ({ deviceId }) => {
  return async (dispatch, getState) => {
    await Promise.all(
      // eslint-disable-next-line lodash/prefer-lodash-method
      terminalsSelectors
        .getTerminalsMapByDevice(getState(), { deviceId })
        .map((terminal, terminalId) =>
          dispatch(terminalsOperations.remove({ terminalId }))
        )
        .toList()
        .toJS()
    );

    let client = selectors.getClient(getState(), { deviceId });
    if (client) setTimeout(() => client.stop().catch(console.error));

    return dispatch(actions.remove({ deviceId }));
  };
};

const reboot = ({ deviceId, username, password }) => {
  return async (dispatch, getState) => {
    try {
      let exec = appSelectors.getService(getState(), {
        service: "ssh.exec",
        params: [deviceId, "reboot", false, false]
      });
      if (exec) {
        await exec.start(username, password);
        setTimeout(() => dispatch(remove({ deviceId })), 5000);
      }
    } catch (error) {
      console.error(`Reboot: ${error.message}`);
    }
  };
};

module.exports = {
  create,
  set,
  remove,
  reboot
};
