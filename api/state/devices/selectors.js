"use strict";

const getDevicesMap = state => state.get("devices");

const hasDevice = (state, props) => state.hasIn(["devices", props.deviceId]);

const getDeviceMap = (state, props) => state.getIn(["devices", props.deviceId]);

const getClient = (state, props) =>
  state.getIn(["devices", props.deviceId, "client"]);

const getUsername = (state, props) =>
  state.getIn(["devices", props.deviceId, "username"]);

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

module.exports = {
  getDevicesMap,
  hasDevice,
  getDeviceMap,
  getClient,
  getUsername,
  getWhenConnected,
  getForwardedHost,
  getForwardedPort,
  getTerminalCounter
};
