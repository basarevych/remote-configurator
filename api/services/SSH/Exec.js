const debug = require("debug")("app:exec");
const EventEmitter = require("events");
const { devicesSelectors } = require("../../state/devices");

class Exec extends EventEmitter {
  constructor(
    di,
    getState,
    dispatch,
    deviceId,
    execString,
    onStdout,
    onStderr
  ) {
    super();

    this.di = di;
    this.getState = getState;
    this.dispatch = dispatch;

    this.deviceId = deviceId;
    this.execString = execString;
    this.onStdout = onStdout;
    this.onStderr = onStderr;
    this.command = null;
    this.stream = undefined;
    this.code = null;
    this.signal = null;
    this.stdout = null;
    this.stderr = null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "ssh.exec";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "getState", "dispatch"];
  }

  async start() {
    if (!_.isUndefined(this.stream)) throw new Error("Already running");

    let device = devicesSelectors.getDeviceMap(this.getState(), {
      deviceId: this.deviceId
    });
    if (!device) throw new Error("Device disconnected");

    this.stream = null;
    this.command = this.di.get("ssh.command", this.deviceId);
    this.command.once("connected", this.onConnected.bind(this));
    this.command.once("disconnected", this.onDisconnected.bind(this));

    debug(`Command on ${this.deviceId}: ${this.execString}`);
    return this.command.start();
  }

  async wait() {
    if (this.code !== null) {
      return {
        code: this.code,
        signal: this.signal,
        stdout: this.stdout,
        stderr: this.stderr
      };
    }

    return new Promise(resolve => {
      this.once("exec", (code, signal, stdout, stderr) => {
        resolve({ code, signal, stdout, stderr });
      });
    });
  }

  async stop() {
    if (this.command) this.command.stop().catch(console.error);
    if (this.stream) {
      this.stream.end();
      let stream = this.stream;
      setTimeout(() => {
        if (this.stream === stream) {
          stream.destroy();
          this.onClose(-1);
        }
      }, 1000);
    } else {
      this.emit("exec", this.code, this.signal, this.stdout, this.stderr);
    }
  }

  onConnected() {
    if (!this.command) return this.stop();
    this.command.exec(this.execString, async (error, stream) => {
      if (error) {
        debug(`SSH command on ${this.deviceId} failed`);
        return this.onError(error);
      }

      this.stream = stream;

      stream
        .on("error", this.onError.bind(this))
        .on("close", this.onClose.bind(this))
        .on("timeout", this.onTimeout.bind(this));

      if (this.onStdout === false) {
        stream.resume();
      } else {
        stream.on("data", data => {
          if (!this.stdout) this.stdout = data;
          else this.stdout = Buffer.concat([this.stdout, data]);
          if (this.onStdout) this.onStdout(data);
        });
      }
      if (this.onStderr === false) {
        stream.stderr.resume();
      } else {
        stream.stderr.on("data", data => {
          if (!this.stderr) this.stderr = data;
          else this.stderr = Buffer.concat([this.stderr, data]);
          if (this.onStderr) this.onStderr(data);
        });
      }
    });
  }

  onDisconnected() {
    this.command = null;
    if (this.code === null) this.code = -1;
    this.stop();
  }

  async onClose(code, signal) {
    debug(`Command result from ${this.deviceId}: ${code} (signal: ${signal})`);

    this.stream = null;
    this.code = code;
    this.signal = signal;

    this.stop();
  }

  async onError(error) {
    console.error(`Command error from ${this.deviceId}: ${error.message}`);
    this.stop();
  }

  async onTimeout() {
    debug(`Command timeout from ${this.deviceId}`);
    this.onError(new Error("Timeout"));
  }
}

module.exports = Exec;
