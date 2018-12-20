"use strict";

const { createSelector } = require("reselect");
const appSelectors = require("../app/selectors");

const getProxiesMap = state => state.get("proxies");

const hasProxy = (state, props) => state.hasIn(["proxies", props.proxyId]);

const isReady = (state, props) =>
  !!state.getIn(["proxies", props.proxyId, "proxy"]);

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

const getForwardedHost = (state, props) =>
  state.getIn(["proxies", props.proxyId, "forwardedHost"]);

const getForwardedPort = (state, props) =>
  state.getIn(["proxies", props.proxyId, "forwardedPort"]);

const getSecret = (state, props) =>
  state.getIn(["proxies", props.proxyId, "secret"]);

const getRandom = (state, props) =>
  state.getIn(["proxies", props.proxyId, "random"]);

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

const getProxy = (state, props) => {
  const ssh = appSelectors.getService(state, { service: "ssh" });
  return new Promise((resolve, reject) => {
    try {
      let onProxy, timer;
      onProxy = ({ proxy, proxyId }) => {
        if (proxyId === props.proxyId) {
          ssh.removeListener("proxy", onProxy);
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          resolve(proxy);
        }
      };
      ssh.on("proxy", onProxy);
      timer = setTimeout(() => {
        timer = null;
        ssh.removeListener("proxy", onProxy);
        resolve(null);
      }, 60 * 1000);
      const info = getProxyMap(state, { proxyId: props.proxyId });
      if (info && info.get("proxy"))
        onProxy({ proxy: info.get("proxy"), proxyId: props.proxyId });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getProxiesMap,
  hasProxy,
  getProxy,
  findProxyId,
  isReady,
  getProxiesMapByDevice,
  getProxyMap,
  getDeviceId,
  getUserId,
  getForwardedHost,
  getForwardedPort,
  getSecret,
  getRandom,
  getIsAuthNeeded,
  getAuthUsername,
  getAuthPassword,
  getExec,
  getClient,
  getStream
};
