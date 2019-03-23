const csrf = require("csurf");
const session = require("express-session");
const LokiStore = require("connect-loki")(session);
const EventEmitter = require("events");

/**
 * User sessions with CSRF protection
 */
class Session extends EventEmitter {
  constructor(config) {
    super();

    this.config = config;

    this.store = null;
    this.session = null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware.session";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["config"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = new Promise(async (resolve, reject) => {
      this.store = new LokiStore({
        path: this.config.sessionDbPath,
        ttl: this.config.sessionMaxAge
      });
      this.store.once("connect", resolve);
      this.store.once("error", reject);
    }).then(() => {
      this.session = session({
        secret: this.config.sessionSecret,
        store: this.store,
        resave: false,
        rolling: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          secure: false,
          maxAge: this.config.sessionMaxAge
        }
      });
    });
    return this.promise;
  }

  accept({ express, io }) {
    express.use(this.session);
    if (process.env.NODE_ENV === "production") express.use(csrf());

    io.use((socket, next) =>
      _.get(socket, "request.res")
        ? this.session(socket.request, socket.request.res, next)
        : next()
    );
  }
}

module.exports = Session;
