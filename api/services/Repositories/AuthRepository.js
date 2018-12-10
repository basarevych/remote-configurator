const debug = require("debug")("app:auth");
const EventEmitter = require("events");

class AuthRepository extends EventEmitter {
  constructor(auth, db) {
    super();

    this.auth = auth;
    this.db = db;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.auth";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["auth", "db"];
  }

  async getStatus(context) {
    debug("status");

    return context.getAuthStatus();
  }

  async signIn(context, args) {
    debug("signIn");

    let success = false;

    let cur = await context.getUser();
    if (cur) {
      if (args.login) {
        if (cur.login === args.login) success = true;
        else await this.auth.signOut(context);
      }
    }

    if (!success) {
      let user;
      if (args.login && args.password) {
        user = await this.db.UserModel.findOne(
          this.db.UserModel.conditions({ login: args.login })
        );
        if (
          user &&
          !(await this.auth.checkPassword(args.password, user.password))
        ) {
          user = null;
        }
      }

      if (user) {
        context.preCachePages({ user }).catch(_.noop);
        await this.auth.signIn(user, context);
        success = true;
      }
    }

    return { success };
  }

  async signOut(context) {
    debug("signOut");

    let success = false;

    if (await context.getUser()) {
      await this.auth.signOut(context);
      success = true;
    }

    return { success };
  }
}

module.exports = AuthRepository;
