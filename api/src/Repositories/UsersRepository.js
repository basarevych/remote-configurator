const debug = require("debug")("app:users");
const EventEmitter = require("events");
const constants = require("../../../common/constants");

const accessLevel = constants.roles.ADMIN;

class UsersRepository extends EventEmitter {
  constructor(di, auth, db, getState, dispatch) {
    super();

    this.di = di;
    this.auth = auth;
    this.db = db;
    this.getState = getState;
    this.dispatch = dispatch;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.users";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "auth", "db", "getState", "dispatch"];
  }

  async getUsers(context) {
    debug("users");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel)) return [];

    return _.invokeMap(
      // eslint-disable-next-line lodash/prefer-lodash-method
      await this.db.UserModel.find(),
      "toSanitizedObject"
    );
  }

  async createUser(context, args) {
    debug("createUser");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let target = new this.db.UserModel({
      login: args.login,
      password:
        args.password && (await this.auth.encryptPassword(args.password)),
      roles: args.roles || []
    });

    await target.validate();
    await target.save();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return { success: true, id: target.id };
  }

  async editUser(context, args) {
    debug("editUser");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let target = await this.db.UserModel.findById(args.id);
    if (!target) return { success: false };

    target.login = args.login;
    if (args.password)
      target.password = await this.auth.encryptPassword(args.password);
    target.roles = args.roles;

    await target.validate();
    await target.save();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return { success: true, id: target.id };
  }

  async deleteUser(context, args) {
    debug("deleteUser");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let target = await this.db.UserModel.findById(args.id);
    if (!target) return { success: false };

    // eslint-disable-next-line lodash/prefer-lodash-method
    let devices = await this.db.DeviceModel.find({ owner: target.id });
    await Promise.all(_.invokeMap(devices, "remove"));

    await target.remove();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return { success: true, id: target.id };
  }
}

module.exports = UsersRepository;
