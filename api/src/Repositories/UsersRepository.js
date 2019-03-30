const debug = require("debug")("app:users");
const EventEmitter = require("events");
const { cursorToDocument } = require("../LokiConnection");
const jwt = require("jsonwebtoken");
const { withFilter } = require("graphql-subscriptions");
const constants = require("../../../common/constants");

const accessLevel = constants.roles.ADMIN;

class UsersRepository extends EventEmitter {
  constructor(di, auth, config, device, user, getState, dispatch, pubsub) {
    super();

    this.di = di;
    this.auth = auth;
    this.config = config;
    this.device = device;
    this.user = user;
    this.getState = getState;
    this.dispatch = dispatch;
    this.pubsub = pubsub;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.users";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [
      "di",
      "auth",
      "config",
      "model.device",
      "model.user",
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
        const decoded = jwt.verify(args.token || "", this.config.sessionSecret);
        context.userId = decoded.userId;
        return this.pubsub.asyncIterator(topics);
      },
      async (payload, args, context) => {
        if (!context || !context.userId) return false;
        const user = await this.user.model.findById(context.userId);
        if (!user || !this.isAllowed(user)) return false;
        return true;
      }
    );
  }

  async getUser(context, { id }) {
    debug("getUser");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    if (!id) return null;

    const user = await this.user.model.findById(id);
    if (!user) throw this.di.get("error.entityNotFound");
    return user;
  }

  async countUsers(context) {
    debug("countUsers");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    return await this.user.model.countDocuments();
  }

  async getUsers(context, { after, first, before, last } = {}) {
    debug("getUsers");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    const docAfter = after && cursorToDocument(after);
    const docBefore = before && cursorToDocument(before);

    let params;
    if (docAfter || docBefore) {
      params = { $loki: {} };
      if (docAfter) params.$loki.$gt = docAfter.$loki;
      if (docBefore) params.$loki.$lt = docBefore.$loki;
    }

    // eslint-disable-next-line lodash/prefer-lodash-method
    let query = this.user.model
      .chain()
      .find(params)
      .simplesort("$loki");
    if (first || last) query = query.limit(Math.max(first, last) + 1); // add +1 for hasNextPage
    return _.map(await query.data(), item => new this.user.model(item));
  }

  async createUser(context, { login, password, roles }) {
    debug("createUser");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    if (await this.user.model.findOne({ login }))
      throw this.di.get("error.entityExists");

    let user = new this.user.model({
      login,
      password: password && (await this.auth.encryptPassword(password)),
      roles
    });

    await user.validateField({ field: "password", value: password }); // before it is encrypted
    await user.validate();
    await user.save();
    context.preparePages({ path: "/users" }).catch(console.error);
    this.pubsub.publish("userCreated", { userCreated: user });
    return user;
  }

  async editUser(context, { id, login, password, roles }) {
    debug("editUser");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    let user = await this.user.model.findById(id);
    if (!user) throw this.di.get("error.entityNotFound");

    user.login = login;
    if (password) {
      await user.validateField({ field: "password", value: password }); // before it is encrypted
      user.password = await this.auth.encryptPassword(password);
    }
    user.roles = roles;

    await user.validate();
    await user.save();
    context.preparePages({ path: "/users" }).catch(console.error);
    this.pubsub.publish("userUpdated", { userUpdated: user });
    return user;
  }

  async deleteUser(context, { id }) {
    debug("deleteUser");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    let user = await this.user.model.findById(id);
    if (!user) throw this.di.get("error.entityNotFound");

    // eslint-disable-next-line lodash/prefer-lodash-method
    let devices = await this.device.model.find({ owner: user.$loki });
    await Promise.all(_.invokeMap(devices, "remove"));

    await user.remove();
    context.preparePages({ path: "/users" }).catch(console.error);
    this.pubsub.publish("userDeleted", { userDeleted: user });
    return user;
  }
}

module.exports = UsersRepository;
