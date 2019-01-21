const debug = require("debug")("app:devices");
const EventEmitter = require("events");
const { cursorToDocument } = require("../LokiConnection");
const jwt = require("jsonwebtoken");
const { withFilter } = require("graphql-subscriptions");
const constants = require("../../../common/constants");

const accessLevel = constants.roles.AUTHENTICATED;

class DevicesRepository extends EventEmitter {
  constructor(di, auth, config, user, device, getState, dispatch, pubsub) {
    super();

    this.di = di;
    this.auth = auth;
    this.config = config;
    this.user = user;
    this.device = device;
    this.getState = getState;
    this.dispatch = dispatch;
    this.pubsub = pubsub;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.devices";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [
      "di",
      "auth",
      "config",
      "model.user",
      "model.device",
      "getState",
      "dispatch",
      "pubsub"
    ];
  }

  isAllowed(requester) {
    return requester && _.includes(requester.roles, accessLevel);
  }

  subscribe(topics) {
    return withFilter(
      (rootValue, args, context) => {
        try {
          const decoded = jwt.verify(
            args.token || "",
            this.config.sessionSecret
          );
          context.userId = decoded.userId;
        } catch (error) {
          debug(`Device subscribe: ${error.message}`);
          context.userId = null;
        }
        return this.pubsub.asyncIterator(topics);
      },
      async (payload, args, context) => {
        try {
          if (!context || !context.userId) throw new Error("No user");
          const user = await this.user.model.findById(context.userId);
          if (!user) throw new Error("User not found");
          if (!this.isAllowed(user)) throw new Error("Access denied");
          return true;
        } catch (error) {
          debug(`Device subscribe: ${error.message}`);
          return false;
        }
      }
    );
  }

  async authenticate(context) {
    // eslint-disable-next-line lodash/prefer-lodash-method
    const devices = await this.device.model.find({
      username: context.username.toString()
    });
    for (let device of devices) {
      if (
        await this.auth.checkPassword(
          (context.password || "").toString(),
          device.password
        )
      ) {
        const user = await this.user.model.findById(device.owner);
        if (user)
          return { deviceId: device.id, userId: user.id, name: device.name };
      }
    }
    return null;
  }

  async getDevice(context, { id }) {
    debug("getDevice");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    if (!id) return null;

    const device = await this.device.model.findById(id);
    if (!device) throw this.di.get("error.entityNotFound");
    return device;
  }

  async countDevices(context) {
    debug("countDevices");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    return await this.device.model.countDocuments({ owner: requester.id });
  }

  async getDevices(context, { after, first, before, last } = {}) {
    debug("getDevices");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    const docAfter = after && cursorToDocument(after);
    const docBefore = before && cursorToDocument(before);

    let params = { owner: requester.id };
    if (docAfter || docBefore) {
      params.$loki = {};
      if (docAfter) params.$loki.$gt = docAfter.$loki;
      if (docBefore) params.$loki.$lt = docBefore.$loki;
    }

    // eslint-disable-next-line lodash/prefer-lodash-method
    let query = this.device.model
      .chain()
      .find(this.device.model.conditions(params))
      .simplesort("$loki");
    if (first || last) query = query.limit(Math.max(first, last) + 1); // add +1 for hasNextPage
    return _.map(await query.data(), item => new this.device.model(item));
  }

  async createDevice(context, { name, password }) {
    debug("createDevice");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    let device = await this.device.model.findOne({
      name,
      owner: requester.id
    });
    if (device) throw this.di.get("error.entityExists");

    device = new this.device.model({
      name,
      username: name && requester.login + "_" + name,
      password: password && (await this.auth.encryptPassword(password)),
      owner: requester.id
    });

    await device.validateField({ field: "password", value: password }); // before it is encrypted
    await device.validate();
    await device.save();
    context.preCachePages({ path: "/devices" }).catch(console.error);
    this.pubsub.publish("deviceCreated", { deviceCreated: device });
    return device;
  }

  async editDevice(context, { id, name, password }) {
    debug("editDevice");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    let device = await this.device.model.findById(id);
    if (!device || device.owner !== requester.id)
      throw this.di.get("error.entityNotFound");

    device.name = name;
    device.username = name && requester.login + "_" + name;
    if (password) {
      await device.validateField({ field: "password", value: password }); // before it is encrypted
      device.password = await this.auth.encryptPassword(password);
    }

    await device.validate();
    await device.save();
    context.preCachePages({ path: "/devices" }).catch(console.error);
    this.pubsub.publish("deviceUpdated", { deviceUpdated: device });
    return device;
  }

  async deleteDevice(context, { id }) {
    debug("deleteDevice");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    let device = await this.device.model.findById(id);
    if (!device || device.owner !== requester.id)
      throw this.di.get("error.entityNotFound");

    await device.remove();
    context.preCachePages({ path: "/devices" }).catch(console.error);
    this.pubsub.publish("deviceDeleted", { deviceDeleted: device });
    return device;
  }
}

module.exports = DevicesRepository;
