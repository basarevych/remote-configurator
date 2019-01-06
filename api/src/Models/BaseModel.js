const { fromJS } = require("immutable");
const ValidationError = require("../Errors/ValidationError");
const validate = require("../../../common/validate");

/**
 * Mimics Mongoose model while using Loki embedded database
 */
class BaseModel {
  constructor(data = {}) {
    if (data.id) {
      data.$loki = parseInt(data.id);
      delete data.id;
    }
    this._data = data;

    this._required = [];
    this._fields = {};

    const now = new Date();
    this.whenCreated = data.whenCreated || now;
    this.whenUpdated = data.whenUpdated || now;
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

  toObject() {
    return this._data;
  }

  toSanitizedObject() {
    let obj = _.assign({}, this._data);
    obj.id = obj.$loki && obj.$loki.toString();
    obj.whenCreated = obj.whenCreated && obj.whenCreated.valueOf();
    obj.whenUpdated = obj.whenUpdated && obj.whenUpdated.valueOf();
    delete obj.$loki;
    return obj;
  }

  static async find() {
    throw new Error("Find is not implemented");
  }

  static async findOne() {
    throw new Error("FindOne is not implemented");
  }

  static async findById() {
    throw new Error("FindById is not implemented");
  }

  async validateField({ field, path, value, doThrow = true }) {
    if (!path) path = field;
    if (!field) field = path;
    let error;
    if (_.includes(this._required, path) && !value) {
      error = { key: field, message: "ERROR_FIELD_REQUIRED" };
    } else {
      const rules = this._fields[field];
      if (rules && rules.validate) {
        const obj = this.toObject();
        const fieldErrors = validate({}, rules.validate, value, fromJS(obj));
        if (fieldErrors.length) {
          error = {
            key: field,
            message: fieldErrors.length === 1 ? fieldErrors[0] : fieldErrors
          };
        }
      }
    }
    if (error && doThrow) throw new ValidationError([error]);
    return error || false;
  }

  async validate() {
    let errors = [];

    const iterate = async (path, obj) => {
      for (let field of _.keys(obj)) {
        let cur = path ? path + "." + field : field;
        if (_.isObject(obj[field])) {
          await iterate(cur, obj[field]);
        } else {
          const error = await this.validateField({
            field,
            path: cur,
            value: _.get(this, cur),
            doThrow: false
          });
          if (error) errors.push(error);
        }
      }
    };

    await iterate("", this.toObject());
    if (errors.length) throw new ValidationError(errors);
  }

  async save() {
    throw new Error("Save is not implemented");
  }

  async remove() {
    throw new Error("Remove is not implemented");
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

module.exports = BaseModel;
