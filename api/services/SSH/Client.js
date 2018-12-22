const debug = require("debug")("app:client");
const EventEmitter = require("events");
const { devicesOperations, devicesSelectors } = require("../../state/devices");
const { proxiesOperations, proxiesSelectors } = require("../../state/proxies");
const constants = require("../../../common/constants");

class Client extends EventEmitter {
  constructor(di, ws, getState, dispatch, devicesRepo, client, info) {
    super();

    this.di = di;
    this.ws = ws;
    this.getState = getState;
    this.dispatch = dispatch;
    this.devicesRepo = devicesRepo;

    this.deviceId = null;
    this.proxyId = null;
    this.proxyParams = {};
    this.client = client;
    this.info = info;

    this.client
      .on("authentication", this.onAuthentication.bind(this))
      .on("ready", this.onReady.bind(this))
      .on("close", this.onClose.bind(this))
      .on("error", this.onError.bind(this))
      .on("timeout", this.onTimeout.bind(this));
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "ssh.client";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "ws", "getState", "dispatch", "repository.devices"];
  }

  async start() {
    debug(`Starting SSH client for new device`);
  }

  async stop() {
    if (this.client) {
      this.client.end();
      let client = this.client;
      setTimeout(() => {
        if (this.client === client) this.onClose();
      }, 1000);
    } else {
      if (
        this.deviceId &&
        devicesSelectors.hasDevice(this.getState(), {
          deviceId: this.deviceId
        })
      ) {
        debug(`SSH device ${this.deviceId} disconnected`);
        await this.dispatch(
          devicesOperations.remove({ deviceId: this.deviceId })
        );
        this.di.get("ssh").emit("kill", { deviceId: this.deviceId });
        this.deviceId = null;
      }
      if (
        this.proxyId &&
        proxiesSelectors.hasProxy(this.getState(), {
          proxyId: this.proxyId
        })
      ) {
        debug(`SSH proxy ${this.proxyId} disconnected`);
        await this.dispatch(
          proxiesOperations.remove({ proxyId: this.proxyId })
        );
        if (
          devicesSelectors.hasDevice(this.getState(), {
            deviceId: this.proxyParams.deviceId
          })
        ) {
          await this.dispatch(
            devicesOperations.set({
              deviceId: this.proxyParams.deviceId,
              status: `Proxy ${this.proxyParams.forwardedHost}:${
                this.proxyParams.forwardedPort
              } terminated`
            })
          );
        }
        this.di
          .get("ssh")
          .emit("kill", { deviceId: this.proxyParams.deviceId });
        this.proxyId = null;
        this.proxyParams = {};
      }
    }
  }

  forwardOut(...args) {
    try {
      if (!this.client) throw new Error("ForwardOut: No client");
      return this.client.forwardOut(...args);
    } catch (error) {
      this.onError(error).catch(console.error);
    }
  }

  async onAuthentication(ctx) {
    if (ctx.username) {
      try {
        let info = await this.dispatch(proxiesOperations.authenticate(ctx));
        if (info) {
          this.proxyId = info.proxyId;
          this.proxyParams = info;
          await this.dispatch(
            proxiesOperations.set({
              proxyId: this.proxyId,
              client: this
            })
          );
          debug(`SSH proxy ${info.proxyId} accepted`);
          return ctx.accept();
        } else {
          info = await this.devicesRepo.authenticate(ctx);
          if (info) {
            this.deviceId = info.deviceId;
            await this.dispatch(
              devicesOperations.create({
                deviceId: this.deviceId,
                userId: info.userId,
                client: this,
                username: ctx.username.toString(),
                address: this.info.ip
              })
            );
            debug(`SSH device ${this.deviceId} accepted`);
            return ctx.accept();
          }
        }
      } catch (error) {
        console.error(error);
      }
    }

    debug(`SSH device rejected`);
    ctx.reject(["password"]);
  }

  onReady() {
    this.client.on("request", this.onRequest.bind(this));
  }

  async onRequest(accept, reject, name, info) {
    let device =
      this.deviceId &&
      devicesSelectors.getDeviceMap(this.getState(), {
        deviceId: this.deviceId
      });
    if (this.deviceId && !device) {
      reject();
      return this.stop();
    }

    let proxy =
      this.proxyId &&
      proxiesSelectors.getProxyMap(this.getState(), {
        proxyId: this.proxyId
      });
    if (this.proxyId && !proxy) {
      reject();
      return this.stop();
    }

    if (name === "tcpip-forward") {
      if (
        this.deviceId &&
        (devicesSelectors.getForwardedPort(this.getState(), {
          deviceId: this.deviceId
        }) ||
          info.bindPort !== constants.commandPort)
      ) {
        reject();
        return this.stop();
      }
      if (
        this.proxyId &&
        (proxiesSelectors.isReady(this.getState(), {
          proxyId: this.proxyId
        }) ||
          info.bindAddr !==
            proxiesSelectors.getForwardedHost(this.getState(), {
              proxyId: this.proxyId
            }) ||
          info.bindPort !==
            proxiesSelectors.getForwardedPort(this.getState(), {
              proxyId: this.proxyId
            }))
      ) {
        reject();
        return this.stop();
      }

      try {
        if (this.deviceId) {
          await this.dispatch(
            devicesOperations.set({
              deviceId: this.deviceId,
              status: "Connected",
              forwardedHost: info.bindAddr,
              forwardedPort: info.bindPort
            })
          );
          debug(
            `SSH device ${this.deviceId} requested port forwarding: ${
              info.bindAddr
            }:${info.bindPort}`
          );
          accept(info.bindPort);
        } else if (this.proxyId) {
          const service = this.di.get("proxy", this.deviceId, this.proxyId);
          await this.dispatch(
            proxiesOperations.set({
              proxyId: this.proxyId,
              proxy: service
            })
          );
          await this.dispatch(
            devicesOperations.set({
              deviceId: proxy.get("deviceId"),
              status: `Proxy ${info.bindAddr}:${info.bindPort} created`
            })
          );
          debug(
            `SSH proxy ${this.proxyId} requested port forwarding: ${
              info.bindAddr
            }:${info.bindPort}`
          );
          accept(info.bindPort);
          await service.start();
        }
        return;
      } catch (error) {
        console.error(error);
      }
      return;
    } else if (name === "cancel-tcpip-forward") {
      if (
        this.deviceId &&
        !devicesSelectors.getForwardedPort(this.getState(), {
          deviceId: this.deviceId
        })
      ) {
        reject();
        return this.stop();
      }

      if (
        this.proxyId &&
        !proxiesSelectors.isReady(this.getState(), {
          proxyId: this.proxyId
        })
      ) {
        reject();
        return this.stop();
      }

      try {
        if (this.deviceId) {
          debug(
            `SSH device ${this.deviceId} cancelled port forwarding: ${
              info.bindAddr
            }:${info.bindPort}`
          );
          await this.dispatch(
            devicesOperations.set({
              deviceId: this.deviceId,
              forwardedHost: null,
              forwardedPort: null
            })
          );
        } else if (this.proxyId) {
          debug(
            `SSH proxy ${this.proxyId} cancelled port forwarding: ${
              info.bindAddr
            }:${info.bindPort}`
          );
          const proxy = await proxiesSelectors.getProxy(this.getState(), {
            proxyId: this.proxyId
          });
          await this.dispatch(
            proxiesOperations.set({
              proxyId: this.proxyId,
              proxy: null
            })
          );
          if (proxy) await proxy.stop();
        }
        accept(info.bindPort);
        return this.stop();
      } catch (error) {
        console.error(error);
      }
    }

    reject();
  }

  async onClose() {
    this.client = null;
    await this.stop();
  }

  async onError(error) {
    console.error(`SSH: ${error.message}`);
    await this.stop();
  }

  async onTimeout() {
    await this.onError(new Error("Timeout"));
  }
}

module.exports = Client;
