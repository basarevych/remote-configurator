const debug = require("debug")("app:browser");
const EventEmitter = require("events");
const Router = require("express").Router;
const { proxiesSelectors, proxiesOperations } = require("../../state/proxies");
const constants = require("../../../common/constants");

/**
 * Browser route
 */
class BrowserRoute extends EventEmitter {
  constructor(getState, dispatch) {
    super();

    this.getState = getState;
    this.dispatch = dispatch;
    this.router = Router();
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "route.browser";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["getState", "dispatch"];
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();
    this.router.all(
      "/browser/:deviceId/:host/:port*?",
      this.allBrowser.bind(this)
    );
  }

  /**
   * @param {object} req
   * @param {object} res
   * @param {function} next
   */
  async allBrowser(req, res, next) {
    debug("Got request");

    let code = 200;
    try {
      let deviceId = req.params.deviceId;
      let userId;
      let host = req.params.host;
      let port = parseInt(req.params.port);

      let proxy = null;

      let user = await req.getUser();
      if (!user) code = 403;
      else userId = user.id;

      if (code === 200 && (!port || port === constants.commandPort)) code = 404;

      if (code === 200) {
        if (!deviceId) {
          debug("No device");
          code = 404;
        } else {
          let proxyId = proxiesSelectors.findProxyId(this.getState(), {
            deviceId,
            userId,
            host,
            port
          });
          if (proxyId) {
            proxy = await this.dispatch(
              proxiesOperations.waitProxy({ proxyId })
            );
          }
          if (!proxy) {
            debug("No proxy");
            code = 404;
          }
        }
      }

      if (code === 200) {
        if (!proxy) {
          code = 500;
        } else {
          debug("Processing request");
          return await proxy.redirect(req, res);
        }
      }
    } catch (error) {
      console.error(error.message);
      code = error.status || 500;
    }

    return this.template(code, req, res);
  }

  template(code, req, res) {
    res.writeHead(code, { "Content-Type": "text/html" });
    res.write(
      `<!doctype html>
<html>
  <head>
    <style type="text/css">
      body {
        font: 14px "Roboto", "sans-serif";
        background: #2a2c38;
        color: rgba(255, 255, 255, 0.87);
      }
    </style>
    <body>
      ${res.locals.translate("PROXY_TPL_TITLE")}
      ${res.locals.translate("PROXY_TPL_MESSAGE")}
      ${code === 403 ? res.locals.translate("PROXY_TPL_403") : ""}
      ${code === 404 ? res.locals.translate("PROXY_TPL_404") : ""}
      ${code === 502 ? res.locals.translate("PROXY_TPL_502") : ""}
    </body>
  </head>
</html>
`
    );
    res.end();
  }
}

module.exports = BrowserRoute;
