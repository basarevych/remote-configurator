const debug = require("debug")("app:stream");
const EventEmitter = require("events");
const { proxiesSelectors } = require("../../state/proxies");

class Stream extends EventEmitter {
  constructor(di, config, getState, dispatch, proxyId) {
    super();

    this.di = di;
    this.config = config;
    this.getState = getState;
    this.dispatch = dispatch;

    this.isStarted = false;
    this.proxyId = proxyId;
    this.stream = null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "ssh.stream";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "config", "getState", "dispatch"];
  }

  async start() {
    if (!this.proxyId || this.isStarted) return null;

    this.isStarted = true;

    let client = proxiesSelectors.getClient(this.getState(), {
      proxyId: this.proxyId
    });
    let forwardedHost = proxiesSelectors.getForwardedHost(this.getState(), {
      proxyId: this.proxyId
    });
    let forwardedPort = proxiesSelectors.getForwardedPort(this.getState(), {
      proxyId: this.proxyId
    });
    if (!client || !forwardedPort || !forwardedPort) return null;

    await new Promise((resolve, reject) => {
      try {
        let onFinish;
        onFinish = () => {
          this.removeListener("connected", onFinish);
          this.removeListener("disconnected", onFinish);
          resolve();
        };
        this.on("connected", onFinish);
        this.on("disconnected", onFinish);
        let isOk = client.forwardOut(
          forwardedHost,
          forwardedPort,
          this.config.sshHost,
          this.config.sshPort,
          this.onForward.bind(this)
        );
        if (isOk === false) {
          console.log(`SSH client (proxy) not responding: ${this.proxyId}`);
          onFinish();
        }
      } catch (error) {
        reject(error);
      }
    });

    return this.stream;
  }

  async stop() {
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
      this.emit("disconnected");
    }
  }

  async onForward(error, stream) {
    if (error) {
      debug(`SSH client (proxy) ${this.proxyId} port forwarding failed`);
      return this.onError(error);
    }

    if (!stream.stderr.resume) stream.stderr.resume = _.noop;

    this.stream = stream;

    stream
      .on("error", this.onError.bind(this))
      .on("close", this.onClose.bind(this))
      .on("timeout", this.onTimeout.bind(this));

    debug(`SSH client ${this.proxyId} port forwarding succeeded`);
    this.emit("connected");
  }

  async onClose() {
    this.stream = null;
    this.stop();
  }

  async onError(error) {
    console.error(`${this.proxyId}: ${error.message}`);
    await this.stop();
  }

  onTimeout() {
    this.onError(new Error("Timeout"));
  }
}

module.exports = Stream;
