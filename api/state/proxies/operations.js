"use strict";

const uuid = require("uuid");
const Chance = require("chance");
const actions = require("./actions");
const selectors = require("./selectors");
const appSelectors = require("../app/selectors");
const devicesSelectors = require("../devices/selectors");
const devicesOperations = require("../devices/operations");

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
      userId: proxy.get("userId")
    };
  };
};

const remove = ({ proxyId }) => {
  return async (dispatch, getState) => {
    let exec = selectors.getExec(getState(), { proxyId });
    if (exec) exec.stop().catch(console.error);
    let client = selectors.getClient(getState(), { proxyId });
    if (client) client.stop().catch(console.error);
    if (selectors.hasProxy(getState(), { proxyId }))
      return dispatch(actions.remove({ proxyId }));
  };
};

const create = ({ deviceId, userId, host, port }) => {
  return async (dispatch, getState) => {
    let proxyId = uuid.v4();
    let config = appSelectors.getService(getState(), { service: "config" });
    let username = new Chance().string({
      length: 32,
      pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    });

    let exec = appSelectors.getService(getState(), {
      service: "ssh.exec",
      params: [
        deviceId,
        `ssh -p ${config.sshPort} -R ${port}:${host}:${port} -N ${username}@${
          config.sshOrigins[0]
        }`
      ]
    });
    if (!exec) return null;

    let name = devicesSelectors.getUsername(getState(), { deviceId });

    await dispatch(
      actions.create({
        deviceId,
        proxyId,
        userId,
        forwardedHost: host,
        forwardedPort: port,
        username,
        exec,
        name: `${name}:${port}`
      })
    );

    exec.once("exec", async () => {
      dispatch(remove({ proxyId })).catch(console.error);
      if (devicesSelectors.hasDevice(getState(), { deviceId })) {
        await dispatch(
          devicesOperations.set({
            deviceId,
            status: `Proxy ${host}:${port} terminated`
          })
        );
      }
    });
    exec.start().catch(console.error);

    setTimeout(async () => {
      if (
        selectors.hasProxy(getState(), { proxyId }) &&
        !selectors.getIsReady(getState(), { proxyId })
      ) {
        remove({ proxyId });
        if (devicesSelectors.hasDevice(getState(), { deviceId })) {
          await dispatch(
            devicesOperations.set({
              deviceId,
              status: `Timeout on ${host}:${port}`
            })
          );
        }
        setTimeout(() => exec.stop().catch(console.error), 3000);
      }
    }, 20 * 1000);

    return proxyId;
  };
};

module.exports = {
  authenticate,
  create,
  set,
  remove
};
