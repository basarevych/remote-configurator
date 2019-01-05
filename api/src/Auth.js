const bcrypt = require("bcrypt");
const EventEmitter = require("events");
const { usersSelectors } = require("../state/users");

class Auth extends EventEmitter {
  constructor(getState, ws) {
    super();
    this.getState = getState;
    this.ws = ws;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "auth";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["getState", "ws"];
  }

  async checkPassword(password, hash) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash, (error, res) => {
        if (error) return reject(error);
        resolve(res);
      });
    });
  }

  async encryptPassword(password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) return reject(error);
        resolve(hash);
      });
    });
  }

  getStatus(user) {
    let isAuthenticated = !!user;

    return {
      isAuthenticated,
      login: isAuthenticated ? user.login : "anonymous",
      roles: isAuthenticated ? user.roles : []
    };
  }

  async signIn(user, req) {
    req.session.isAuthenticated = true;
    req.session.userId = user.id;
    req.user = user;
    return req.saveSession();
  }

  async signOut(req) {
    let userId = req.session.isAuthenticated && req.session.userId;

    req.session.isAuthenticated = false;
    req.session.userId = null;
    req.user = null;
    await req.saveSession();

    if (!userId) return;

    let sockets = usersSelectors.getSocketsMap(this.getState(), {
      userId,
      sessionId: req.session.id
    });

    if (!sockets || !sockets.size) return;

    for (let info of sockets.values()) {
      if (info.get("socket")) this.ws.emitStatus(info.get("socket"), null);
    }
    process.nextTick(() => {
      for (let info of sockets.values()) {
        if (info.get("socket")) info.get("socket").disconnect(true);
      }
    });
  }
}

module.exports = Auth;
