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

    this.keyboardTimeout = 60 * 1000;
    this.terminalDestroyTimeout = 3 * 1000;
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

  async start(username, password) {
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

      await this.dispatch(
        terminalsOperations.set({
          terminalId: this.terminalId,
          isConnecting: true,
          isWaiting: false,
          isConnected: false,
          auth: null
        })
      );

      this.command = this.di.get("ssh.command", deviceId);
      this.command.onError = (...args) => {
        this.onError(...args);
      };
      this.command.onPassword = (...args) => {
        this.onPassword(...args);
      };
      this.command.on("connected", this.onConnected.bind(this));
      this.command.on("disconnected", this.onDisconnected.bind(this));

      await this.command.start(username, password);
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
            isConnecting: false,
            isWaiting: false,
            isConnected: false,
            client: null
          })
        );
        setTimeout(() => {
          this.dispatch(
            terminalsOperations.remove({ terminalId: this.terminalId })
          ).catch(error => console.error(error));
        }, this.terminalDestroyTimeout);
      }
    }
  }

  write(...args) {
    if (!this.stream) throw new Error("No channel");
    return this.stream.write(...args);
  }

  setWindow(...args) {
    if (!this.stream) throw new Error("No channel");
    return this.stream.setWindow(...args);
  }

  signal(...args) {
    if (!this.stream) throw new Error("No channel");
    return this.stream.signal(...args);
  }

  onConnected() {
    debug(`SSH terminal ${this.terminalId} connected`);
    if (
      this.command.shell({ term: "xterm" }, this.onShell.bind(this)) === false
    ) {
      this.onError(new Error("Terminal is not ready"));
    }
  }

  onDisconnected() {
    debug(`SSH terminal ${this.terminalId} lost connection`);
    this.command = null;
    this.stop();
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
    try {
      if (
        !terminalsSelectors.hasTerminal(this.getState(), {
          terminalId: this.terminalId
        })
      ) {
        throw new Error("Terminal disconnected");
      }

      await this.dispatch(
        terminalsOperations.set({
          terminalId: this.terminalId,
          isWaiting: false,
          isConnected: true,
          auth: null
        })
      );
    } catch (error) {
      this.onError(error);
    }
  }

  async onPassword(name, instructions, instructionsLang, prompts, finish) {
    debug(`Keybaord-interactive from ${this.deviceId}`);
    try {
      if (
        !terminalsSelectors.hasTerminal(this.getState(), {
          terminalId: this.terminalId
        })
      ) {
        throw new Error("Terminal disconnected");
      }

      await this.dispatch(
        terminalsOperations.set({
          terminalId: this.terminalId,
          isWaiting: true,
          auth: {
            username: name,
            finish,
            banner: instructions,
            prompts
          }
        })
      );
    } catch (error) {
      this.onError(error);
    }
  }

  async onClose() {
    this.stream = null;
    this.stop();
  }

  async onError(error) {
    console.error(`${this.terminalId}: ${error.message}`);
    try {
      if (
        terminalsSelectors.hasTerminal(this.getState(), {
          terminalId: this.terminalId
        })
      ) {
        await this.dispatch(
          terminalsOperations.set({
            terminalId: this.terminalId,
            isConnecting: false,
            isWaiting: false,
            isConnected: false,
            status: error.toString(),
            auth: null
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
    await this.stop();
  }

  onTimeout() {
    this.onError(new Error("Timeout"));
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
      this.onError(error);
    }
  }
}

module.exports = Terminal;
