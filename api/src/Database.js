const Loki = require("lokijs");
const EventEmitter = require("events");
const UserModel = require("./Models/User");
const DeviceModel = require("./Models/Device");
const constants = require("../../common/constants");

class Database extends EventEmitter {
  constructor(config, di, auth) {
    super();

    this.config = config;
    this.di = di;
    this.auth = auth;

    this.UserModel = UserModel;
    this.UserModel.db = this;
    this.DeviceModel = DeviceModel;
    this.DeviceModel.db = this;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "db";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["config", "di", "auth"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = new Promise((resolve, reject) => {
      try {
        this.db = new Loki(this.config.dbPath, {
          autoload: true,
          autoloadCallback: () => {
            this.users = this.db.getCollection("users");
            if (!this.users) this.users = this.db.addCollection("users");
            this.devices = this.db.getCollection("devices");
            if (!this.devices) this.devices = this.db.addCollection("devices");
            resolve();
          },
          autosave: true,
          autosaveInterval: 4000
        });
      } catch (error) {
        reject(error);
      }
    }).then(async () => {
      if (this.config.rootLogin && this.config.rootPassword) {
        let user = await this.UserModel.findOne({
          login: this.config.rootLogin
        });
        if (!user) {
          user = new this.UserModel({
            login: this.config.rootLogin,
            password: await this.auth.encryptPassword(this.config.rootPassword),
            roles: [constants.roles.ADMIN]
          });
          await user.validate();
          await user.save();
          console.log("> Admin user created");
        }
      }
    });
    return this.promise;
  }
}

module.exports = Database;
