"use strict";

const { createSelector } = require("reselect");

const getTerminalsMap = state => state.get("terminals");

const getTerminalsMapByDevice = createSelector(
  state => state.get("terminals"),
  (state, props) => props.deviceId,
  (terminals, deviceId) =>
    // eslint-disable-next-line lodash/prefer-lodash-method
    terminals.filter(terminal => terminal.get("deviceId") === deviceId)
);

const getTerminalsMapByUser = createSelector(
  state => state.get("terminals"),
  (state, props) => props.userId,
  (terminals, userId) =>
    // eslint-disable-next-line lodash/prefer-lodash-method
    terminals.filter(terminal => terminal.get("userId") === userId)
);

const hasTerminal = (state, props) =>
  state.hasIn(["terminals", props.terminalId]);

const getTerminalMap = (state, props) =>
  state.getIn(["terminals", props.terminalId]);

const getDeviceId = (state, props) =>
  state.getIn(["terminals", props.terminalId, "deviceId"]);

const getUserId = (state, props) =>
  state.getIn(["terminals", props.terminalId, "userId"]);

const getClient = (state, props) =>
  state.getIn(["terminals", props.terminalId, "client"]);

module.exports = {
  getTerminalsMap,
  getTerminalsMapByDevice,
  getTerminalsMapByUser,
  hasTerminal,
  getTerminalMap,
  getDeviceId,
  getUserId,
  getClient
};
