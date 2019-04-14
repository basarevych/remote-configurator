const BaseModel = require("./BaseModel");
const fields = require("../../../common/forms/createDevice");

/**
 * Mimics Mongoose model while using Loki embedded database
 */
class DeviceModel extends BaseModel {
  constructor(data = {}) {
    if (data.owner) data.owner = parseInt(data.owner);
    super(data);

    this._required = [
      "whenCreated",
      "whenUpdated",
      "name",
      "username",
      "password",
      "owner"
    ];
    this._fields = fields;
  }

  get name() {
    return this._data.name;
  }

  set name(name) {
    this.whenUpdated = new Date();
    return (this._data.name = name);
  }

  get username() {
    return this._data.username;
  }

  set username(username) {
    this.whenUpdated = new Date();
    return (this._data.username = username);
  }

  get password() {
    return this._data.password;
  }

  set password(password) {
    this.whenUpdated = new Date();
    return (this._data.password = password);
  }

  get owner() {
    return this._data.owner && this._data.owner.toString();
  }

  set owner(owner) {
    this.whenUpdated = new Date();
    return (this._data.owner =
      owner && (_.isString(owner) ? parseInt(owner) : owner));
  }

  static async find(conditions) {
    return _.map(
      // eslint-disable-next-line lodash/prefer-lodash-method
      this.db.devices.find(conditions),
      obj => new this(obj)
    );
  }

  static async findOne(conditions) {
    let obj = this.db.devices.findOne(conditions);
    return obj && new this(obj);
  }

  static async findById(id) {
    let obj = this.db.devices.get(_.isString(id) ? parseInt(id) : id);
    return obj && new this(obj);
  }

  static async countDocuments(conditions) {
    return this.db.devices.count(conditions);
  }

  static chain() {
    return this.db.devices.chain();
  }

  async save() {
    let obj = this.toObject();
    let result = this.id
      ? this.constructor.db.devices.update(obj)
      : this.constructor.db.devices.insert(obj);
    this._data = result;
    return this.id;
  }

  async remove() {
    this.constructor.db.devices.remove(this.toObject());
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
        if (key === "owner" || _.endsWith(key, ".owner")) {
          if (_.isString(value)) value = parseInt(value);
        }
        x[key] = _.isPlainObject(value) ? deepMap(value) : value;
      });
      return x;
    };
    return conditions && deepMap(conditions);
  }
}

module.exports = DeviceModel;
