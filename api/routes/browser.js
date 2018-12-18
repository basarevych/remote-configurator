const debug = require("debug")("app:browser");
const BaseRoute = require("./base");
const proxiesSelectors = require("../state/proxies/selectors");
const constants = require("../../common/constants");

/**
 * Browser route
 */
class BrowserRoute extends BaseRoute {
  /**
   * Constructor
   * @param {App} app
   */
  constructor(app) {
    super(app);

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

    res.locals.callback = code => {
      res.writeHead(code, { "Content-Type": "text/html" });
      res.write(
        `<!doctype html>
  <html>
    <head>
      <style type="text/css">
        body {
          background: #2a2c38;
          color: rgba(255, 255, 255, 0.87);
        }
      </style>
      <body>
        ${res.locals.translate("PROXY_TPL_TITLE")}
        ${res.locals.translate("PROXY_TPL_MESSAGE")}
        ${code === 404 ? res.locals.translate("PROXY_TPL_404") : ""}
        ${code === 502 ? res.locals.translate("PROXY_TPL_502") : ""}
      </body>
    </head>
  </html>
  `
      );
      res.end();
    };

    let code = 200;
    try {
      let deviceId = req.params.deviceId;
      let userId;
      let host = req.params.host;
      let port = parseInt(req.params.port);

      let stream = null;
      let origin = "";
      let pathname = "";
      let query = "";

      let user = await req.getUser();
      if (!user) code = 403;
      else userId = user.id;

      if (code === 200 && (!port || port === constants.commandPort)) code = 404;

      if (code === 200) {
        if (!deviceId) {
          debug("No device");
          code = 404;
        } else {
          let getState = this.app.di.get("getState");
          let proxyId = proxiesSelectors.findProxyId(getState(), {
            deviceId,
            userId,
            host,
            port
          });
          if (!proxyId) {
            debug("No proxy");
            code = 404;
          } else {
            debug("Creating the stream");
            stream = this.app.di.get("ssh.stream", proxyId);

            origin = `/api/browser/${deviceId}/${host}/${port}`;
            pathname = req.originalUrl.slice(origin.length);
            let indexQuery = _.indexOf(pathname, "?");
            if (indexQuery !== -1) {
              query = pathname.slice(indexQuery);
              pathname = pathname.slice(0, indexQuery);
            }
          }
        }
      }

      if (code === 200) {
        if (!stream) {
          code = 500;
        } else {
          debug("Starting the stream");
          return await stream.start(req, res, origin, pathname || "/", query);
        }
      }
    } catch (error) {
      console.error(error.message);
      code = error.status || 500;
    }

    return res.locals.callback(code);
  }
}

module.exports = BrowserRoute;