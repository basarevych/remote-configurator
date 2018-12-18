"use strict";

const { createSelector } = require("reselect");
const constants = require("../../../common/constants");

const getDevicesMap = state => state.get("devices");

const getDevicesMapByUser = createSelector(
  state => state.get("devices"),
  (state, props) => props.userId,
  (state, props) => props.port,
  (devices, userId, port) =>
    // eslint-disable-next-line lodash/prefer-lodash-method
    devices.filter(
      device =>
        device.get("userId") === userId &&
        device.get("forwardedPort") === (port || constants.commandPort)
    )
);

const hasDevice = (state, props) => state.hasIn(["devices", props.deviceId]);

const getDeviceMap = (state, props) => state.getIn(["devices", props.deviceId]);

const getUserId = (state, props) =>
  state.getIn(["devices", props.deviceId, "userId"]);

const getClient = (state, props) =>
  state.getIn(["devices", props.deviceId, "client"]);

const getUsername = (state, props) =>
  state.getIn(["devices", props.deviceId, "username"]);

const getAddress = (state, props) =>
  state.getIn(["devices", props.deviceId, "address"]);

const getWhenConnected = (state, props) =>
  state.getIn(["devices", props.deviceId, "whenConnected"]);

const getForwardedHost = (state, props) =>
  state.getIn(["devices", props.deviceId, "forwardedHost"]);

const getForwardedPort = (state, props) =>
  state.getIn(["devices", props.deviceId, "forwardedPort"]);

const getTerminalCounter = (state, props) =>
  // eslint-disable-next-line lodash/prefer-lodash-method
  state
    .get("terminals")
    .toList()
    .map(terminal =>
      terminal.get("deviceId") === props.deviceId ? terminal.get("counter") : 0
    )
    .reduce((acc, cur) => Math.max(acc, cur), 0);

const getRemoteUsername = (state, props) =>
  state.getIn(["devices", props.deviceId, "remoteUsername"]);

const getRemotePassword = (state, props) =>
  state.getIn(["devices", props.deviceId, "remotePassword"]);

const getIsLoggingIn = (state, props) =>
  state.getIn(["devices", props.deviceId, "isLoggingIn"]);

const getIsLoggedIn = (state, props) =>
  state.getIn(["devices", props.deviceId, "isLoggedIn"]);

const getFinish = (state, props) =>
  state.getIn(["devices", props.deviceId, "auth", "finish"]);

module.exports = {
  getDevicesMap,
  getDevicesMapByUser,
  hasDevice,
  getDeviceMap,
  getUserId,
  getClient,
  getUsername,
  getAddress,
  getWhenConnected,
  getForwardedHost,
  getForwardedPort,
  getTerminalCounter,
  getRemoteUsername,
  getRemotePassword,
  getIsLoggingIn,
  getIsLoggedIn,
  getFinish
};
