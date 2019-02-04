const BaseModel = require("./BaseModel");
const constants = require("../../../common/constants");
const fields = require("../../../common/forms/user");

/**
 * Mimics Mongoose model while using Loki embedded database
 */
class UserModel extends BaseModel {
  constructor(data = {}) {
    super(data);

    this._required = [
      "whenCreated",
      "whenUpdated",
      "login",
      "password",
      "roles"
    ];
    this._fields = fields;

    this.roles = data.roles || [];
  }

  get login() {
    return this._data.login;
  }

  set login(login) {
    this.whenUpdated = new Date();
    return (this._data.login = login);
  }

  get password() {
    return this._data.password;
  }

  set password(password) {
    this.whenUpdated = new Date();
    return (this._data.password = password);
  }

  get roles() {
    return this._data.roles;
  }

  set roles(roles) {
    this.whenUpdated = new Date();
    if (_.isArray(roles) && !_.includes(roles, constants.roles.AUTHENTICATED))
      roles.push(constants.roles.AUTHENTICATED);
    return (this._data.roles = roles);
  }

  static async find(conditions) {
    return _.map(
      // eslint-disable-next-line lodash/prefer-lodash-method
      this.db.users.find(conditions),
      obj => new this(obj)
    );
  }

  static async findOne(conditions) {
    let obj = this.db.users.findOne(conditions);
    return obj && new this(obj);
  }

  static async findById(id) {
    let obj = this.db.users.get(_.isString(id) ? parseInt(id) : id);
    return obj && new this(obj);
  }

  static async countDocuments(conditions) {
    return this.db.users.count(conditions);
  }

  static chain() {
    return this.db.users.chain();
  }

  async save() {
    let obj = this.toObject();
    let result = this.id
      ? this.constructor.db.users.update(obj)
      : this.constructor.db.users.insert(obj);
    this._data = result;
    return this.id;
  }

  async remove() {
    this.constructor.db.users.remove(this.toObject());
    return this.id;
  }
}

module.exports = UserModel;
