const debug = require("debug")("app:users");
const EventEmitter = require("events");
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

  async authenticate(context) {
    // eslint-disable-next-line lodash/prefer-lodash-method
    const devices = await this.db.DeviceModel.find({
      username: context.username.toString()
    });
    for (let device of devices) {
      if (
        await this.auth.checkPassword(
          (context.password || "").toString(),
          device.password
        )
      ) {
        const user = await this.db.UserModel.findById(device.owner);
        if (user)
          return { deviceId: device.id, userId: user.id, name: device.name };
      }
    }
    return null;
  }

  async getDevices(context) {
    debug("devices");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel)) return [];

    return _.invokeMap(
      // eslint-disable-next-line lodash/prefer-lodash-method
      await this.db.DeviceModel.find({ owner: user.id }),
      "toSanitizedObject"
    );
  }

  async createDevice(context, args) {
    debug("createDevice");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let target = await this.db.DeviceModel.findOne({
      name: args.name,
      owner: user.id
    });
    if (target) return { success: false };

    target = new this.db.DeviceModel({
      name: args.name,
      username: args.name && user.login + "_" + args.name,
      password:
        args.password && (await this.auth.encryptPassword(args.password)),
      owner: user.id
    });

    await target.validateField({ field: "password", value: args.password }); // before it is encrypted
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

    target.name = args.name;
    target.username = args.name && user.login + "_" + args.name;
    if (args.password) {
      await target.validateField({ field: "password", value: args.password }); // before it is encrypted
      target.password = await this.auth.encryptPassword(args.password);
    }

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
