const debug = require("debug")("app:ssh");
const fs = require("fs-extra");
const ssh2 = require("ssh2");
const path = require("path");
const generateRSAKeypair = require("generate-rsa-keypair");
const EventEmitter = require("events");

class SSH extends EventEmitter {
  constructor(config, di) {
    super();

    this.config = config;
    this.di = di;

    this.server = null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "ssh";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["config", "di"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();

    const privateKeyPath = path.join(__dirname, "..", "..", "id_rsa");
    const publicKeyPath = path.join(__dirname, "..", "..", "id_rsa.pub");

    try {
      fs.accessSync(privateKeyPath);
    } catch (unused) {
      const pair = generateRSAKeypair();
      fs.writeFileSync(privateKeyPath, pair.private);
      fs.chmodSync(privateKeyPath, 0o600);
      fs.writeFileSync(publicKeyPath, pair.public);
      fs.chmodSync(publicKeyPath, 0o600);
    }

    const key = fs.readFileSync(privateKeyPath);
    this.server = new ssh2.Server(
      { hostKeys: [{ key }] },
      this.onConnection.bind(this)
    );
    this.server.listen(
      this.config.sshPort,
      this.config.sshHost,
      this.onListening.bind(this)
    );
  }

  onListening() {
    if (process.env.NODE_ENV !== "test") {
      console.log(
        `> SSH listening on ${this.server.address().address}:${
          this.server.address().port
        }`
      );
    }
  }

  async onConnection(client, info) {
    debug(`SSH device connected`);
    this.di
      .get("ssh.client", client, info)
      .start()
      .catch(console.error);
  }
}

module.exports = SSH;
