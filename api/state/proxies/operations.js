"use strict";

const Chance = require("chance");
const jsotp = require("jsotp");
const actions = require("./actions");
const selectors = require("./selectors");
const devicesSelectors = require("../devices/selectors");

const chance = new Chance();

const set = actions.set;

const authenticate = context => {
  return async (dispatch, getState) => {
    const proxyId = getState()
      .get("proxies")
      .findKey(proxy => proxy.get("username") === context.username.toString());
    if (!proxyId) return null;
    const proxy = selectors.getProxyMap(getState(), { proxyId });
    if (!proxy) return null;
    return {
      proxyId,
      deviceId: proxy.get("deviceId"),
      userId: proxy.get("userId"),
      forwardedHost: proxy.get("forwardedHost"),
      forwardedPort: proxy.get("forwardedPort")
    };
  };
};

const remove = ({ proxyId }) => {
  return async (dispatch, getState) => {
    let proxy = selectors.getProxyMap(getState(), { proxyId });
    if (!proxy) return;

    if (proxy.get("exec")) {
      proxy
        .get("exec")
        .stop()
        .catch(console.error);
    }
    if (proxy.get("client")) {
      proxy
        .get("client")
        .stop()
        .catch(console.error);
    }
    if (proxy.get("proxy")) {
      proxy
        .get("proxy")
        .stop()
        .catch(console.error);
    }

    return dispatch(actions.remove({ proxyId }));
  };
};

const create = ({
  deviceId,
  userId,
  proxyId,
  host,
  port,
  isAuthNeeded,
  authUsername,
  authPassword,
  onLog
}) => {
  return async (dispatch, getState, di) => {
    let ssh = di.get("ssh");
    let config = di.get("config");
    let username = chance.string({
      length: 32,
      pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    });
    let secret = chance.string({
      length: 100
    });
    let random = jsotp.Base32.random_gen();

    let exec = di.get(
      "ssh.exec",
      deviceId,
      `ssh -p ${config.sshPort} -R ${port}:${host}:${port} -N ${username}@${
        config.sshOrigins[0]
      }`,
      onLog,
      onLog
    );
    if (!exec) return;

    let name = devicesSelectors.getUsername(getState(), { deviceId });

    await dispatch(
      actions.create({
        deviceId,
        userId,
        proxyId,
        forwardedHost: host,
        forwardedPort: port,
        secret,
        random,
        username,
        exec,
        name: `${name}:${port}`,
        isAuthNeeded,
        authUsername,
        authPassword
      })
    );

    let timer = null;
    const onProxy = async ({ proxy, proxyId: eventProxyId }) => {
      if (eventProxyId === proxyId) {
        ssh.removeListener("proxy", onProxy);
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        if (!proxy) dispatch(remove({ proxyId })).catch(console.error);
      }
    };
    timer = setTimeout(async () => {
      timer = null;
      onProxy({ proxyId });
    }, 3 * 60 * 1000);
    ssh.on("proxy", onProxy);

    exec.start().catch(console.error);
  };
};

const waitProxy = props => {
  return async (dispatch, getState, di) => {
    const ssh = di.get("ssh");
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
        const info = selectors.getProxyMap(getState(), {
          proxyId: props.proxyId
        });
        if (info && info.get("proxy"))
          onProxy({ proxy: info.get("proxy"), proxyId: props.proxyId });
      } catch (error) {
        reject(error);
      }
    });
  };
};

module.exports = {
  authenticate,
  create,
  set,
  remove,
  waitProxy
};
