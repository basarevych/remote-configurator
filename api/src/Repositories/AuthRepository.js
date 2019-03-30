const debug = require("debug")("app:auth");
const Chance = require("chance");
const EventEmitter = require("events");

class AuthRepository extends EventEmitter {
  constructor(config, auth, user) {
    super();

    this.config = config;
    this.auth = auth;
    this.user = user;

    this.chance = new Chance();
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.auth";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["config", "auth", "model.user"];
  }

  generateToken() {
    return this.chance.string({
      length: 32,
      pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    });
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
        user = await this.user.model.findOne({ login: args.login });
        if (
          user &&
          !(await this.auth.checkPassword(args.password, user.password))
        ) {
          user = null;
        } else if (!user && this.config.selfRegistration) {
          user = new this.user.model({
            login: args.login,
            password:
              args.password && (await this.auth.encryptPassword(args.password)),
            roles: args.roles || []
          });

          await user.validateField({ field: "password", value: args.password }); // before it is encrypted
          await user.validate();
          await user.save();
          context.preparePages({ path: "/users" }).catch(console.error);
        }
      }

      if (user) {
        context.preparePages({ user }).catch(console.error);
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
