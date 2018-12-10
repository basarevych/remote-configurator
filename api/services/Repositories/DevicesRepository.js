const debug = require("debug")("app:users");
const EventEmitter = require("events");
const ValidationError = require("../../lib/ValidationError");
const constants = require("../../../common/constants");

const accessLevel = constants.roles.AUTHENTICATED;

class DevicesRepository extends EventEmitter {
  constructor(auth, db, getState, dispatch) {
    super();

    this.auth = auth;
    this.db = db;
    this.getState = getState;
    this.dispatch = dispatch;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.devices";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["auth", "db", "getState", "dispatch"];
  }

  async getDevices(context) {
    debug("devices");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel)) return [];

    return _.invokeMap(
      // eslint-disable-next-line lodash/prefer-lodash-method
      await this.db.DeviceModel.find(),
      "toSanitizedObject"
    );
  }

  async createDevice(context, args) {
    debug("createDevice");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let errors = [];
    if (!args.name)
      errors.push({ key: "name", message: "ERROR_FIELD_REQUIRED" });
    if (!args.password)
      errors.push({ key: "password", message: "ERROR_FIELD_REQUIRED" });
    if (errors.length) throw new ValidationError(errors);

    let target = await this.db.DeviceModel.findOne(
      this.db.DeviceModel.conditions({ name: args.name, owner: user.id })
    );
    if (target) return { success: false };

    target = new this.db.DeviceModel({
      name: args.name,
      password: await this.auth.encryptPassword(args.password),
      owner: user.id
    });

    await target.validate();
    await target.save();
    context.preCachePages({ path: "/", user }).catch(console.error);
    return { success: true, id: target.id };
  }

  async editDevice(context, args) {
    debug("editDevice");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let target = await this.db.DeviceModel.findById(args.id);
    if (!target || target.owner !== user.id) return { success: false };

    if (!args.name) {
      throw new ValidationError([
        { key: "name", message: "ERROR_FIELD_REQUIRED" }
      ]);
    }

    target.name = args.name;
    if (args.password)
      target.password = await this.auth.encryptPassword(args.password);

    await target.validate();
    await target.save();
    context.preCachePages({ path: "/", user }).catch(console.error);
    return { success: true, id: target.id };
  }

  async deleteDevice(context, args) {
    debug("deleteDevice");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let target = await this.db.DeviceModel.findById(args.id);
    if (!target || target.owner !== user.id) return { success: false };

    await target.remove();
    context.preCachePages({ path: "/", user }).catch(console.error);
    return { success: true, id: target.id };
  }
}

module.exports = DevicesRepository;
