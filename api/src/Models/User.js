const { fromJS } = require("immutable");
const ValidationError = require("../Errors/ValidationError");
const constants = require("../../../common/constants");
const fields = require("../../../common/forms/user");
const validate = require("../../../common/validate");

/**
 * Mimics Mongoose model while using Loki embedded database
 */
class UserModel {
  constructor(data = {}) {
    if (data.id) {
      data.$loki = parseInt(data.id);
      delete data.id;
    }
    this._data = data;

    this._required = [
      "whenCreated",
      "whenUpdated",
      "login",
      "password",
      "roles"
    ];

    const now = new Date();
    this.whenCreated = data.whenCreated || now;
    this.whenUpdated = data.whenUpdated || now;
    this.roles = data.roles || [];
  }

  static get db() {
    if (!this._db) throw new Error("Model is not initialized");
    return this._db;
  }

  static set db(db) {
    return (this._db = db);
  }

  get id() {
    return this._data.$loki && this._data.$loki.toString();
  }

  set id(id) {
    this.whenUpdated = new Date();
    return (this._data.$loki = id && (_.isString(id) ? parseInt(id) : id));
  }

  get whenCreated() {
    return this._data.whenCreated;
  }

  set whenCreated(whenCreated) {
    return (this._data.whenCreated = whenCreated);
  }

  get whenUpdated() {
    return this._data.whenUpdated;
  }

  set whenUpdated(whenUpdated) {
    return (this._data.whenUpdated = whenUpdated);
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

  toObject() {
    return this._data;
  }

  toSanitizedObject() {
    let obj = _.assign({}, this._data);
    obj.id = obj.$loki && obj.$loki.toString();
    obj.whenCreated = obj.whenCreated && obj.whenCreated.valueOf();
    obj.whenUpdated = obj.whenUpdated && obj.whenUpdated.valueOf();
    obj.roles = _.filter(
      obj.roles || [],
      role => role !== constants.roles.AUTHENTICATED
    );
    delete obj.$loki;
    delete obj.password;
    return obj;
  }

  static async find(conditions) {
    return _.map(
      // eslint-disable-next-line lodash/prefer-lodash-method
      this.db.users.find(this.conditions(conditions)),
      obj => new this(obj)
    );
  }

  static async findOne(conditions) {
    let obj = this.db.users.findOne(this.conditions(conditions));
    return obj && new this(obj);
  }

  static async findById(id) {
    let obj = this.db.users.get(_.isString(id) ? parseInt(id) : id);
    return obj && new this(obj);
  }

  async validate() {
    let errors = [];

    const obj = this.toObject();
    for (let field of _.keys(obj)) {
      if (_.includes(this._required, field) && !this[field]) {
        errors.push({ key: field, message: "ERROR_FIELD_REQUIRED" });
        continue;
      }

      const rules = fields[field];
      if (!rules || !rules.validate) continue;

      const fieldErrors = validate({}, rules.validate, obj[field], fromJS(obj));
      if (fieldErrors.length) {
        errors = errors.concat({
          key: field,
          message: fieldErrors.length === 1 ? fieldErrors[0] : fieldErrors
        });
      }
    }

    if (errors.length) throw new ValidationError(errors);
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

  static conditions(conditions) {
    const deepMap = obj => {
      const x = {};
      _.forOwn(obj, function(value, key) {
        if (key === "id" || _.endsWith(key, ".id")) {
          key = key.slice(0, key.length - 2) + "$loki";
          if (_.isString(value)) value = parseInt(value);
        }
        x[key] = _.isPlainObject(value) ? deepMap(value) : value;
      });
      return x;
    };
    return deepMap(conditions);
  }
}

module.exports = UserModel;
