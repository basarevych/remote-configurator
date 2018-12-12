const debug = require("debug")("app:client");
const EventEmitter = require("events");
const { devicesOperations, devicesSelectors } = require("../../state/devices");

class Client extends EventEmitter {
  constructor(di, ws, getState, dispatch, devicesRepo, client, info) {
    super();

    this.di = di;
    this.ws = ws;
    this.getState = getState;
    this.dispatch = dispatch;
    this.devicesRepo = devicesRepo;

    this.deviceId = null;
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
        devicesSelectors.hasDevice(this.getState(), {
          deviceId: this.deviceId
        })
      ) {
        debug(`SSH device ${this.deviceId} disconnected`);
        await this.dispatch(
          devicesOperations.remove({ deviceId: this.deviceId })
        );
        this.deviceId = null;
      }
    }
  }

  forwardOut(...args) {
    if (!this.client) throw new Error("No client");
    return this.client.forwardOut(...args);
  }

  async onAuthentication(ctx) {
    if (ctx.method === "password") {
      if (ctx.username) {
        try {
          const info = await this.devicesRepo.authenticate(ctx);
          if (info) {
            this.deviceId = info.device.id;
            await this.dispatch(
              devicesOperations.create({
                deviceId: this.deviceId,
                userId: info.user.id,
                client: this,
                username: ctx.username.toString(),
                address: this.info.ip
              })
            );
            debug(`SSH device ${this.deviceId} accepted`);
            return ctx.accept();
          }
        } catch (error) {
          console.error(error);
        }
      }

      debug(`SSH device ${this.deviceId} sent wrong credentials`);
      ctx.reject();
      this.stop();
    }

    debug(`SSH device ${this.deviceId} rejected`);
    ctx.reject(["password"]);
  }

  onReady() {
    this.client.on("request", this.onRequest.bind(this));
  }

  async onRequest(accept, reject, name, info) {
    let device = devicesSelectors.getDeviceMap(this.getState(), {
      deviceId: this.deviceId
    });
    if (!device) {
      reject();
      return this.stop();
    }

    if (name === "tcpip-forward") {
      if (
        devicesSelectors.getForwardedPort(this.getState(), {
          deviceId: this.deviceId
        })
      ) {
        reject();
        return this.stop();
      }

      try {
        await this.dispatch(
          devicesOperations.set({
            deviceId: this.deviceId,
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
        return;
      } catch (error) {
        console.error(error);
      }
      return;
    } else if (name === "cancel-tcpip-forward") {
      if (
        !devicesSelectors.getForwardedPort(this.getState(), {
          deviceId: this.deviceId
        })
      ) {
        reject();
        return this.stop();
      }

      try {
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
    this.stop();
  }

  async onError(error) {
    console.error(`SSH: ${error.message}`);
    this.stop();
  }

  async onTimeout() {
    this.onError(new Error("Timeout"));
  }
}

module.exports = Client;
