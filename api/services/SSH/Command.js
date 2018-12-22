const debug = require("debug")("app:command");
const ssh2 = require("ssh2");
const EventEmitter = require("events");
const { devicesOperations, devicesSelectors } = require("../../state/devices");
const constants = require("../../../common/constants");

class Command extends EventEmitter {
  constructor(di, config, getState, dispatch, deviceId) {
    super();

    this.di = di;
    this.config = config;
    this.getState = getState;
    this.dispatch = dispatch;

    this.deviceId = deviceId;
    this.isConnecting = false;
    this.isReady = false;
    this.stream = null;
    this.client = null;
    this.terminalQueue = [];

    this.keyboardTimeout = 60 * 1000;
    this.username = null;
    this.password = null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "ssh.command";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "config", "getState", "dispatch"];
  }

  async start() {
    if (!this.deviceId || this.isConnecting) return;

    this.isConnecting = true;

    let client = devicesSelectors.getClient(this.getState(), {
      deviceId: this.deviceId
    });
    if (!client) throw new Error("Device not connected");

    let forwardedHost = devicesSelectors.getForwardedHost(this.getState(), {
      deviceId: this.deviceId
    });
    let forwardedPort = devicesSelectors.getForwardedPort(this.getState(), {
      deviceId: this.deviceId
    });
    if (forwardedPort !== constants.commandPort)
      throw new Error("Device is not using command port");

    this.username = devicesSelectors.getRemoteUsername(this.getState(), {
      deviceId: this.deviceId
    });
    this.password = devicesSelectors.getRemotePassword(this.getState(), {
      deviceId: this.deviceId
    });

    let isOk = client.forwardOut(
      forwardedHost,
      forwardedPort,
      this.config.sshHost,
      this.config.sshPort,
      this.onForward.bind(this)
    );
    if (isOk === false) {
      console.log(`SSH client not responding: ${this.deviceId}`);
      client.stop().catch(console.error);
    }
  }

  async stop() {
    if (this.stream) {
      try {
        this.stream.signal("KILL");
      } catch (unused) {
        // do nothing
      }
      this.stream.end();
      let stream = this.stream;
      setTimeout(() => {
        if (this.stream === stream) {
          this.stream.destroy();
          this.onClose("stream");
        }
      }, 1000);
    }
    if (this.client) {
      this.client.end();
      let client = this.client;
      setTimeout(() => {
        if (this.client === client) {
          this.client.destroy();
          this.onClose("client");
        }
      }, 1000);
    }
    if (!this.stream && !this.client) this.emit("disconnected");
  }

  shell(...args) {
    if (!this.client) {
      this.onError(new Error("No client")).catch(console.error);
      return;
    }
    return this.client.shell(...args);
  }

  exec(...args) {
    if (!this.client) {
      this.onError(new Error("No client")).catch(console.error);
      return;
    }
    return this.client.exec(...args);
  }

  async onForward(error, stream) {
    if (error) {
      debug(`SSH client ${this.deviceId} port forwarding failed`);
      return this.onError(error);
    }

    if (!stream.stderr.resume) stream.stderr.resume = _.noop;

    this.stream = stream;

    stream
      .on("error", this.onError.bind(this))
      .on("close", this.onClose.bind(this, "stream"))
      .on("timeout", this.onTimeout.bind(this));

    debug(`SSH client ${this.deviceId} port forwarding succeeded`);
    try {
      if (
        !devicesSelectors.hasDevice(this.getState(), {
          deviceId: this.deviceId
        })
      ) {
        throw new Error("Device disconnected");
      }

      this.client = new ssh2.Client();
      this.client
        .on("keyboard-interactive", this.onPassword.bind(this))
        .on("error", this.onError.bind(this))
        .on("close", this.onClose.bind(this, "client"))
        .on("timeout", this.onTimeout.bind(this))
        .on("ready", this.onReady.bind(this))
        .on("continue", () => this.emit("continue"));

      this.client.connect({
        sock: stream,
        username: this.username,
        password: this.password || undefined,
        tryKeyboard: true
      });
    } catch (error) {
      await this.onError(error);
    }
  }

  async onPassword(name, instructions, instructionsLang, prompts, finish) {
    debug(`Keybaord-interactive from ${this.deviceId}`);
    finish([this.password || ""]);
  }

  async onReady() {
    if (!this.client) return;

    this.isReady = true;
    this.emit("connected");
  }

  async onError(error) {
    console.error(`${this.deviceId}: ${error.message}`);
    try {
      if (
        devicesSelectors.hasDevice(this.getState(), {
          deviceId: this.deviceId
        })
      ) {
        await this.dispatch(
          devicesOperations.set({
            deviceId: this.deviceId,
            status: error.toString()
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
    await this.stop();
  }

  async onTimeout() {
    await this.onError(new Error("Timeout"));
  }

  async onClose(type) {
    if (!this[type]) return;

    this[type] = null;
    this.isReady = false;
    await this.stop();
  }
}

module.exports = Command;
