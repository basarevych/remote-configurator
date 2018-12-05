const Loki = require("lokijs");
const EventEmitter = require("events");
const constants = require("../../common/constants");
const moment = require("../../common/moment");

class Database extends EventEmitter {
  constructor(config, auth) {
    super();

    this.config = config;
    this.auth = auth;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "db";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["config", "auth"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  getId(object) {
    if (object && _.isString(object)) return parseInt(object);
    if (object && _.isObject(object) && isFinite(object.$loki))
      return object.$loki.toString();
    throw new Error("Invalid ID");
  }

  userTemplate(params = {}) {
    let now = Date.now();

    let roles = params.roles || [];
    if (!_.includes(roles, constants.roles.AUTHENTICATED))
      roles.push(constants.roles.AUTHENTICATED);

    return {
      ...params,
      whenCreated: params.whenCreated || now,
      whenUpdated: params.whenUpdated || now,
      roles
    };
  }

  userObject({ user }) {
    let roles = Array.from(user.roles) || [];
    let index = _.indexOf(roles, constants.roles.AUTHENTICATED);
    if (index !== -1) roles.splice(index, 1);

    return {
      id: this.getId(user),
      whenCreated: moment(user.whenCreated),
      whenUpdated: moment(user.whenUpdated),
      login: user.login,
      roles
    };
  }

  deviceTemplate(params = {}) {
    let now = Date.now();

    return {
      ...params,
      whenCreated: params.whenCreated || now,
      whenUpdated: params.whenUpdated || now
    };
  }

  deviceObject({ device }) {
    return {
      id: this.getId(device),
      whenCreated: moment(device.whenCreated),
      whenUpdated: moment(device.whenUpdated),
      name: device.name
    };
  }

  async init() {
    await new Promise((resolve, reject) => {
      try {
        const doInit = () => {
          this.users = this.db.getCollection("users");
          if (!this.users) this.users = this.db.addCollection("users");
          this.devices = this.db.getCollection("devices");
          if (!this.devices) this.devices = this.db.addCollection("devices");
          resolve();
        };
        this.db = new Loki(this.config.dbPath, {
          autoload: true,
          autoloadCallback: doInit,
          autosave: true,
          autosaveInterval: 4000
        });
      } catch (error) {
        reject(error);
      }
    });

    if (this.config.rootLogin && this.config.rootPassword) {
      let user = this.users.findOne({ login: this.config.rootLogin });
      if (!user) {
        this.users.insert(
          this.userTemplate({
            login: this.config.rootLogin,
            password: await this.auth.encryptPassword(this.config.rootPassword),
            roles: [constants.roles.ADMIN]
          })
        );
        console.log("> Admin user created");
      }
    }
  }
}

module.exports = Database;
