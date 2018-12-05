const debug = require("debug")("app:devices");
const EventEmitter = require("events");
const ValidationError = require("../../lib/ValidationError");

class DevicesRepository extends EventEmitter {
  constructor(db, getState, dispatch) {
    super();

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
    return ["db", "getState", "dispatch"];
  }

  async getDevice(params) {
    return this.db.devices.findOne(params);
  }

  async getDevices(context) {
    debug("devices");

    let user = await context.getUser();
    if (!user) return [];

    return _.map(
      // eslint-disable-next-line lodash/prefer-lodash-method
      await this.db.devices.find({ owner: this.db.getId(user) }),
      device => this.db.deviceObject({ device })
    );
  }

  async createDevice(context, args) {
    debug("createDevice");

    let user = await context.getUser();
    if (!user) return { success: false };

    let errors = [];
    if (!args.name)
      errors.push({ key: "name", message: "ERROR_FIELD_REQUIRED" });
    if (!args.password)
      errors.push({ key: "password", message: "ERROR_FIELD_REQUIRED" });
    if (errors.length) throw new ValidationError(errors);

    let device = await this.getDevice({
      owner: this.db.getId(user),
      name: args.name
    });
    if (device) return { success: false };

    device = this.db.devices.insert(
      this.db.deviceTemplate({
        name: args.name,
        password: await this.auth.encryptPassword(args.password),
        owner: this.db.getId(user)
      })
    );

    return { success: true, id: this.db.getId(device) };
  }

  async editDevice(context, args) {
    debug("editDevice");

    let user = await context.getUser();
    if (!user) return { success: false };

    let device = await this.getDevice({
      owner: this.db.getId(user),
      name: args.name
    });
    if (!device) return { success: false };

    if (!args.name) {
      throw new ValidationError([
        { key: "name", message: "ERROR_FIELD_REQUIRED" }
      ]);
    }

    device.whenUpdated = Date.now();
    device.name = args.name;
    if (args.password)
      device.password = await this.auth.encryptPassword(args.password);

    this.db.devices.update(device);
    return { success: true, id: this.db.getId(device) };
  }

  async deleteDevice(context, args) {
    debug("deleteDevice");

    let user = await context.getUser();
    if (!user) return { success: false };

    let device = this.db.devices.get(this.db.getId(args.id));
    if (!device || device.owner !== this.db.getId(user))
      return { success: false };

    this.db.devices.remove(device);
    return { success: true, id: args.id };
  }
}

module.exports = DevicesRepository;
