const EventEmitter = require("events");
const UserModel = require("./User");
const constants = require("../../../common/constants");

class User extends EventEmitter {
  constructor(db) {
    super();

    this.roles = _.values(constants.roles);

    this.db = db;

    this.model = UserModel;
    this.model.db = db;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "model.user";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["db"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {}
}

module.exports = User;
