const debug = require("debug")("app:terminal");
const EventEmitter = require("events");
const {
  terminalsOperations,
  terminalsSelectors
} = require("../../state/terminals");
const { historiesOperations } = require("../../state/histories");

class Terminal extends EventEmitter {
  constructor(di, getState, dispatch, terminalId) {
    super();

    this.di = di;
    this.getState = getState;
    this.dispatch = dispatch;

    this.terminalId = terminalId;
    this.deviceId = null;
    this.command = null;
    this.stream = null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "ssh.terminal";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "getState", "dispatch"];
  }

  async start() {
    if (!this.terminalId || this.command || this.stream) return;

    try {
      if (
        !terminalsSelectors.hasTerminal(this.getState(), {
          terminalId: this.terminalId
        })
      ) {
        throw new Error("Terminal disconnected");
      }

      let deviceId = terminalsSelectors.getDeviceId(this.getState(), {
        terminalId: this.terminalId
      });
      if (!deviceId) return this.stop();
      this.deviceId = deviceId;

      this.command = this.di.get("ssh.command", deviceId);
      this.command.on("connected", this.onConnected.bind(this));
      this.command.on("disconnected", this.onDisconnected.bind(this));

      return await new Promise(async (resolve, reject) => {
        try {
          let onSuccess, onFailure;
          onSuccess = () => {
            this.removeListener("ready", onSuccess);
            this.removeListener("disconnected", onFailure);
            resolve(true);
          };
          onFailure = () => {
            this.removeListener("ready", onSuccess);
            this.removeListener("disconnected", onFailure);
            resolve(false);
          };
          this.on("ready", onSuccess);
          this.on("disconnected", onFailure);
          await this.command.start();
        } catch (error) {
          reject(error);
        }
      });
    } catch (error) {
      this.onError(error);
    }
  }

  async stop() {
    if (this.command) this.command.stop().catch(console.error);
    if (this.stream) {
      this.stream.end();
      let stream = this.stream;
      setTimeout(() => {
        if (this.stream === stream) {
          this.stream.destroy();
          this.onClose();
        }
      }, 1000);
    } else {
      if (
        terminalsSelectors.hasTerminal(this.getState(), {
          terminalId: this.terminalId
        })
      ) {
        await this.dispatch(
          terminalsOperations.set({
            terminalId: this.terminalId,
            client: null
          })
        );
        this.dispatch(
          terminalsOperations.remove({ terminalId: this.terminalId })
        ).catch(error => console.error(error));
      }
    }
  }

  write(...args) {
    try {
      if (!this.stream) throw new Error("Write: No channel");
      return this.stream.write(...args);
    } catch (error) {
      this.onError(error).catch(console.error);
    }
  }

  setWindow(...args) {
    try {
      if (!this.stream) throw new Error("SetWindow: No channel");
      return this.stream.setWindow(...args);
    } catch (error) {
      this.onError(error).catch(console.error);
    }
  }

  signal(...args) {
    try {
      if (!this.stream) throw new Error("Signal: No channel");
      return this.stream.signal(...args);
    } catch (error) {
      this.onError(error).catch(console.error);
    }
  }

  async onConnected() {
    debug(`SSH terminal ${this.terminalId} connected`);
    this.emit("connected");
    if (
      this.command.shell({ term: "xterm" }, this.onShell.bind(this)) === false
    ) {
      await this.onError(new Error("Terminal is not ready"));
    }
  }

  async onDisconnected() {
    debug(`SSH terminal ${this.terminalId} lost connection`);
    this.emit("disconnected");
    this.command = null;
    await this.stop();
  }

  async onShell(error, stream) {
    if (error) {
      debug(`SSH terminal ${this.terminalId} failed`);
      return this.onError(error);
    }

    this.stream = stream;

    stream
      .on("error", this.onError.bind(this))
      .on("close", this.onClose.bind(this))
      .on("timeout", this.onTimeout.bind(this))
      .on("data", this.onData.bind(this))
      .stderr.on("data", this.onData.bind(this));

    debug(`SSH terminal ${this.terminalId} ready`);
    this.emit("ready");
  }

  async onClose() {
    this.stream = null;
    await this.stop();
  }

  async onError(error) {
    console.error(`${this.terminalId}: ${error.message}`);
    await this.stop();
  }

  async onTimeout() {
    await this.onError(new Error("Timeout"));
  }

  async onData(data) {
    debug(`Client stream data ${this.terminalId}`);

    try {
      if (
        terminalsSelectors.hasTerminal(this.getState(), {
          terminalId: this.terminalId
        })
      ) {
        await this.dispatch(
          historiesOperations.add({
            terminalId: this.terminalId,
            data: data.toString()
          })
        );
      }
    } catch (error) {
      await this.onError(error);
    }
  }
}

module.exports = Terminal;
