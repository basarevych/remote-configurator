const EventEmitter = require("events");
const DeviceModel = require("./Device");

class Device extends EventEmitter {
  constructor(db) {
    super();

    this.db = db;

    this.model = DeviceModel;
    this.model.db = db;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "model.device";
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

module.exports = Device;
