const EventEmitter = require("events");
const constants = require("../../../common/constants");

/**
 * REST API
 */
class Routes extends EventEmitter {
  constructor(build, csrf, token, status, browser) {
    super();

    this.routes = {
      build,
      csrf,
      token,
      status,
      browser
    };
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware.routes";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [
      "route.build",
      "route.csrf",
      "route.token",
      "route.status",
      "route.browser"
    ];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {}

  async express(express) {
    await Promise.all(
      _.map(_.keys(this.routes), key => this.routes[key].init())
    );

    for (let key of _.keys(this.routes))
      express.use(constants.apiBase, this.routes[key].router);
  }
}

module.exports = Routes;
