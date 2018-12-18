const debug = require("debug")("app:stream");
const net = require("net");
const url = require("url");
const httpProxy = require("http-proxy");
const decompressResponse = require("decompress-response");
const queryString = require("query-string");
const EventEmitter = require("events");
const { proxiesSelectors } = require("../../state/proxies");

class Stream extends EventEmitter {
  constructor(di, config, getState, dispatch, proxyId) {
    super();

    this.di = di;
    this.config = config;
    this.getState = getState;
    this.dispatch = dispatch;

    this.proxyId = proxyId;
    this.stream = null;
    this.server = null;
    this.socket = null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "ssh.stream";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "config", "getState", "dispatch"];
  }

  async start(req, res, origin, path, query) {
    if (!this.proxyId || this.stream) return;

    let code = 502;

    try {
      let client = proxiesSelectors.getClient(this.getState(), {
        proxyId: this.proxyId
      });
      if (!client) throw new Error("Proxy disconnected");

      let forwardedHost = proxiesSelectors.getForwardedHost(this.getState(), {
        proxyId: this.proxyId
      });
      let forwardedPort = proxiesSelectors.getForwardedPort(this.getState(), {
        proxyId: this.proxyId
      });
      let isAuthNeeded = proxiesSelectors.getIsAuthNeeded(this.getState(), {
        proxyId: this.proxyId
      });
      let authUsername = proxiesSelectors.getAuthUsername(this.getState(), {
        proxyId: this.proxyId
      });
      let authPassword = proxiesSelectors.getAuthPassword(this.getState(), {
        proxyId: this.proxyId
      });

      let isConnected = await new Promise((resolve, reject) => {
        try {
          let onSuccess, onFailure;
          onSuccess = () => {
            this.removeListener("connected", onSuccess);
            this.removeListener("disconnected", onFailure);
            resolve(true);
          };
          onFailure = () => {
            this.removeListener("connected", onSuccess);
            this.removeListener("disconnected", onFailure);
            resolve(false);
          };
          this.on("connected", onSuccess);
          this.on("disconnected", onFailure);
          let isOk = client.forwardOut(
            forwardedHost,
            forwardedPort,
            this.config.sshHost,
            this.config.sshPort,
            this.onForward.bind(this)
          );
          if (isOk === false) {
            console.log(`SSH client (proxy) not responding: ${this.proxyId}`);
            onFailure();
          }
        } catch (error) {
          reject(error);
        }
      });

      if (isConnected) {
        res.on("finish", () =>
          setTimeout(() => this.stop().catch(console.error))
        );

        let port = await this.startServer();
        let auth = isAuthNeeded ? `${authUsername}:${authPassword}` : undefined;

        const proxy = httpProxy.createProxyServer({});
        proxy.on("error", (err, req, res2) => {
          setTimeout(() => res2.end());
          return res.locals.callback(code);
        });
        proxy.once("proxyReq", (proxyReq, req) => {
          if (!req.body || !_.keys(req.body).length) return;
          let body;
          switch (proxyReq.getHeader("Content-Type")) {
            case "application/json":
            case "application/json; charset=UTF-8":
              body = JSON.stringify(req.body);
              break;
            case "application/x-www-form-urlencoded":
              body = queryString.stringify(req.body);
              break;
            default:
          }
          if (body) {
            proxyReq.setHeader("Content-Length", Buffer.byteLength(body));
            proxyReq.write(body);
            proxyReq.end();
          }
        });
        proxy.on("proxyRes", (proxyRes, req, res) => {
          proxyRes = decompressResponse(proxyRes);
          let body = new Buffer("");
          proxyRes.on("data", data => {
            body = Buffer.concat([body, data]);
          });
          proxyRes.on("end", () => {
            for (let key of _.keys(proxyRes.headers)) {
              let value = proxyRes.headers[key];
              if (
                key.match(/^x-frame-options$/i) ||
                key.match(/^content-encoding$/i) ||
                key.match(/^content-length$/i)
              ) {
                delete proxyRes.headers[key];
              } else if (
                key.match(/^content-type$/i) &&
                value.match(/^text\/html/i)
              ) {
                body = body.toString();
                body = _.replace(
                  body,
                  /(\s+href\s*=\s*["'])\//gi,
                  `$1${origin}/`
                );
                body = _.replace(
                  body,
                  /(\s+src\s*=\s*["'])\//gi,
                  `$1${origin}/`
                );
                body = _.replace(
                  body,
                  /(\s+action\s*=\s*["'])\//gi,
                  `$1${origin}/`
                );
                body = _.replace(
                  body,
                  /\s+target\s*=\s*(["'])(_parent|_top)(["'])/gi,
                  " target=$1_self$3"
                );
              }
              if (
                _.includes([201, 301, 302, 307, 308], proxyRes.statusCode) &&
                key.match(/^location$/i)
              ) {
                let index = value.indexOf("//");
                if (index !== -1) {
                  value = value.slice(index + 2);
                  index = value.indexOf("/");
                  value = index === -1 ? "" : value.slice(index);
                  proxyRes.headers[key] = origin + value;
                }
              }
            }
            let src = new url.URL(this.config.appOrigins[0]);
            body = _.replace(
              body,
              new RegExp(`${forwardedHost}:${forwardedPort}`, "gi"),
              `${src.hostname}:${src.port}`
            );
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            res.end(body);
          });
        });

        return proxy.web(req, res, {
          target: `http://127.0.0.1:${port}${path}${query}`,
          headers: {
            Host: `${forwardedHost}:${forwardedPort}`
          },
          auth,
          localAddress: "127.0.0.1",
          changeOrigin: true,
          ignorePath: true,
          cookieDomainRewrite: "",
          cookiePathRewrite: "/",
          selfHandleResponse: true
        });
      }
    } catch (error) {
      this.onError(error);
      code = 500;
    }

    if (res.locals.callback) return res.locals.callback(code);
    else res.end();
  }

  async startServer() {
    this.server = net.createServer(socket => {
      this.server.close();
      this.server = null;
      this.socket = socket;
      this.socket.on("close", this.onCloseSocket.bind(this));
      this.socket.on("error", this.onError.bind(this));
      if (this.stream) this.socket.pipe(this.stream).pipe(this.socket);
      else this.stop();
    });
    this.server.on("error", this.onError.bind(this));
    return new Promise((resolve, reject) => {
      try {
        this.server.listen(() => {
          resolve(this.server.address().port);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async stop() {
    if (this.server) {
      this.server.close();
      this.server = null;
    }
    if (this.socket) {
      this.socket.end();
      let socket = this.socket;
      setTimeout(() => {
        if (this.socket === socket) {
          this.socket.destroy();
          this.onCloseSocket();
        }
      }, 1000);
    }
    if (this.stream) {
      this.stream.end();
      let stream = this.stream;
      setTimeout(() => {
        if (this.stream === stream) {
          this.stream.destroy();
          this.onCloseStream();
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
      .on("close", this.onCloseStream.bind(this))
      .on("timeout", this.onTimeout.bind(this));

    debug(`SSH client ${this.proxyId} port forwarding succeeded`);
    this.emit("connected");
  }

  async onCloseStream() {
    this.stream = null;
    this.stop();
  }

  async onCloseSocket() {
    this.socket = null;
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
