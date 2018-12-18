"use strict";

const { createSelector } = require("reselect");

const getProxiesMap = state => state.get("proxies");

const hasProxy = (state, props) => state.hasIn(["proxies", props.proxyId]);

const findProxyId = createSelector(
  state => state.get("proxies"),
  (state, props) => props.deviceId,
  (state, props) => props.userId,
  (state, props) => props.host,
  (state, props) => props.port,
  (proxies, deviceId, userId, host, port) =>
    // eslint-disable-next-line lodash/prefer-lodash-method
    proxies.findKey(
      proxy =>
        proxy.get("deviceId") === deviceId &&
        proxy.get("userId") === userId &&
        proxy.get("forwardedHost") === host &&
        proxy.get("forwardedPort") === port
    )
);

const getProxiesMapByDevice = createSelector(
  state => state.get("proxies"),
  (state, props) => props.deviceId,
  (proxies, deviceId) =>
    // eslint-disable-next-line lodash/prefer-lodash-method
    proxies.filter(proxy => proxy.get("deviceId") === deviceId)
);

const getProxyMap = (state, props) => state.getIn(["proxies", props.proxyId]);

const getDeviceId = (state, props) =>
  state.getIn(["proxies", props.proxyId, "deviceId"]);

const getUserId = (state, props) =>
  state.getIn(["proxies", props.proxyId, "userId"]);

const getIsReady = (state, props) =>
  state.getIn(["proxies", props.proxyId, "isReady"]);

const getForwardedHost = (state, props) =>
  state.getIn(["proxies", props.proxyId, "forwardedHost"]);

const getForwardedPort = (state, props) =>
  state.getIn(["proxies", props.proxyId, "forwardedPort"]);

const getLocalPort = (state, props) =>
  state.getIn(["proxies", props.proxyId, "localPort"]);

const getIsAuthNeeded = (state, props) =>
  state.getIn(["proxies", props.proxyId, "isAuthNeeded"]);

const getAuthUsername = (state, props) =>
  state.getIn(["proxies", props.proxyId, "authUsername"]);

const getAuthPassword = (state, props) =>
  state.getIn(["proxies", props.proxyId, "authPassword"]);

const getExec = (state, props) =>
  state.getIn(["proxies", props.proxyId, "exec"]);

const getClient = (state, props) =>
  state.getIn(["proxies", props.proxyId, "client"]);

const getStream = (state, props) =>
  state.getIn(["proxies", props.proxyId, "stream"]);

module.exports = {
  getProxiesMap,
  hasProxy,
  findProxyId,
  getProxiesMapByDevice,
  getProxyMap,
  getDeviceId,
  getUserId,
  getIsReady,
  getForwardedHost,
  getForwardedPort,
  getLocalPort,
  getIsAuthNeeded,
  getAuthUsername,
  getAuthPassword,
  getExec,
  getClient,
  getStream
};
