"use strict";

const actions = require("./actions");
const selectors = require("./selectors");
const terminalsOperations = require("../terminals/operations");
const terminalsSelectors = require("../terminals/selectors");
const proxiesOperations = require("../proxies/operations");
const proxiesSelectors = require("../proxies/selectors");

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
        .concat(
          // eslint-disable-next-line lodash/prefer-lodash-method
          proxiesSelectors
            .getProxiesMapByDevice(getState(), { deviceId })
            .map((proxy, proxyId) =>
              dispatch(proxiesOperations.remove({ proxyId }))
            )
            .toList()
            .toJS()
        )
    );

    let client = selectors.getClient(getState(), { deviceId });
    if (client) setTimeout(() => client.stop().catch(console.error));

    return dispatch(actions.remove({ deviceId }));
  };
};

const open = ({ deviceId, username, password }) => {
  return async (dispatch, getState, di) => {
    try {
      await dispatch(set({ deviceId, isLoggingIn: true, isLoggedIn: false }));
      let init = di.get("ssh.initiator", deviceId);
      if (init) return init.start(username, password);
    } catch (error) {
      console.error(`Open: ${error.message}`);
    }
  };
};

const finishAuth = ({ deviceId, reply }) => {
  return async (dispatch, getState) => {
    let finish = selectors.getFinish(getState(), { deviceId });
    if (finish) {
      try {
        if (!reply) reply = "";
        await dispatch(set({ deviceId, auth: null, remotePassword: reply }));
        finish([reply]);
      } catch (error) {
        console.error(error);
      }
    }
  };
};

module.exports = {
  create,
  set,
  remove,
  open,
  finishAuth
};
