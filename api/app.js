"use strict";

require("@babel/polyfill");
require("isomorphic-unfetch");
if (!global._) global._ = require("lodash");

const nextApp = require("next");
const Injectt = require("injectt");
const path = require("path");
const url = require("url");
const express = require("express");
const { PubSub } = require("graphql-subscriptions");
const getStore = require("./state/store");
const constants = require("../common/constants");
const styles = require("../common/themes");
const l10n = require("../common/locales");

require("dotenv").config({ path: path.join(__dirname, "..", "/.env") });

let appHost = process.env.APP_HOST || "0.0.0.0";
let appPort = parseInt(process.env.APP_PORT, 10) || 3000;
let appOrigins = process.env.APP_ORIGINS;
let appSubscriptionsServer =
  process.env.APP_SUBSCRIPTIONS_SERVER || `ws://localhost:${appPort}`;
let appInnerServer =
  process.env.APP_INNER_SERVER || `http://localhost:${appPort}`;
let appStatic = process.env.APP_STATIC || "";
let appTrustProxy = process.env.APP_TRUST_PROXY === "true" ? 1 : 0;
let appOnlineUsers = parseInt(process.env.APP_ONLINE_USERS, 10) || 50;
let appSslKey = process.env.APP_SSL_KEY;
let appSslCert = process.env.APP_SSL_CERT;
let appSslCa = process.env.APP_SSL_CA;
let appProxyHost = process.env.APP_PROXY_HOST || "0.0.0.0";
let appProxyPortLow = parseInt(process.env.APP_PROXY_PORT_LOW, 10) || 40000;
let appProxyPortHigh = parseInt(process.env.APP_PROXY_PORT_HIGH, 10) || 60000;
let appProxyOrigins = process.env.APP_PROXY_ORIGINS;
let appProxySslKey = process.env.APP_PROXY_SSL_KEY;
let appProxySslCert = process.env.APP_PROXY_SSL_CERT;
let appProxySslCa = process.env.APP_PROXY_SSL_CA;
let sessionDbPath = process.env.SESSION_DB_PATH;
let sessionSecret = process.env.SESSION_SECRET;
let sessionMaxAge = 1000 * 60 * 60 * 24 * 7;
let rootLogin = process.env.ROOT_LOGIN;
let rootPassword = process.env.ROOT_PASSWORD;
let selfRegistration = process.env.SELF_REGISTRATION === "true";
let dbPath = process.env.DB_PATH;
let sshHost = process.env.SSH_HOST || "0.0.0.0";
let sshPort = parseInt(process.env.SSH_PORT, 10) || 35000;
let sshOrigins = process.env.SSH_ORIGINS;
let proxyInnerHost = process.env.PROXY_INNER_HOST || "127.0.0.1";
let proxyInnerPortLow = parseInt(process.env.PROXY_INNER_PORT_LOW, 10) || 40000;
let proxyInnerPortHigh =
  parseInt(process.env.PROXY_INNER_PORT_HIGH, 10) || 60000;

if (!process.env.NODE_ENV) process.env.NODE_ENV = "production";
if (!process.env.APP_INNER_SERVER)
  process.env.APP_INNER_SERVER = appInnerServer;

/**
 * The application
 */
class App {
  /**
   * Constructor
   */
  constructor() {
    if (sessionDbPath && sessionDbPath[0] !== "/" && sessionDbPath[0] !== "\\")
      sessionDbPath = path.resolve(__dirname, "..", sessionDbPath);

    if (dbPath && dbPath[0] !== "/" && dbPath[0] !== "\\")
      dbPath = path.resolve(__dirname, "..", dbPath);

    if (appOrigins) {
      try {
        if (_.isString(appOrigins)) appOrigins = JSON.parse(appOrigins);
      } catch (error) {
        console.error("Could not parse APP_ORIGINS: ", error.message);
        process.exit(1);
      }
    } else {
      appOrigins = [`http://localhost:${appPort}`];
    }

    if (appProxyOrigins) {
      try {
        if (_.isString(appProxyOrigins))
          appProxyOrigins = JSON.parse(appProxyOrigins);
      } catch (error) {
        console.error("Could not parse APP_PROXY_ORIGINS: ", error.message);
        process.exit(1);
      }
    } else {
      appProxyOrigins = appOrigins.slice();
    }

    if (sshOrigins) {
      try {
        if (_.isString(sshOrigins)) sshOrigins = JSON.parse(sshOrigins);
      } catch (error) {
        console.error("Could not parse SSH_ORIGINS: ", error.message);
        process.exit(1);
      }
    } else {
      sshOrigins = [new url.URL(appOrigins[0]).hostname];
    }

    this.config = {
      appHost,
      appPort,
      appOrigins,
      appSubscriptionsServer,
      appInnerServer,
      appStatic,
      appTrustProxy,
      appOnlineUsers,
      appSslKey,
      appSslCert,
      appSslCa,
      appProxyHost,
      appProxyPortLow,
      appProxyPortHigh,
      appProxyOrigins,
      appProxySslKey,
      appProxySslCert,
      appProxySslCa,
      sessionDbPath,
      sessionSecret,
      sessionMaxAge,
      rootLogin,
      rootPassword,
      selfRegistration,
      dbPath,
      sshHost,
      sshPort,
      sshOrigins,
      proxyInnerHost,
      proxyInnerPortLow,
      proxyInnerPortHigh
    };

    // Express
    this.express = express();
    this.express.set("port", this.config.appPort);
    this.express.set("trust proxy", this.config.appTrustProxy);

    // Dependency injection container
    this.di = new Injectt();
    this.di.load(path.resolve(__dirname, "src")); // auto load all the services
    this.di.registerInstance(this, "app");
    this.di.registerInstance(this.config, "config");
    this.di.registerInstance(new PubSub(), "pubsub");

    // Redux store
    this.store = getStore(this.di);
  }

  async init({ mainServer }) {
    if (!this.config.sessionSecret) {
      console.error("Please define SESSION_SECRET");
      process.exit(1);
    }
    if (!this.config.sessionDbPath) {
      console.error("Please define SESSION_DB_PATH");
      process.exit(1);
    }
    if (!this.config.dbPath) {
      console.error("Please define DB_PATH");
      process.exit(1);
    }

    if (!_.isArray(this.config.appOrigins)) {
      throw new Error(
        "APP_ORIGINS env variable should be a JSON string of array of strings"
      );
    }
    if (!_.isArray(this.config.appProxyOrigins)) {
      throw new Error(
        "APP_PROXY_ORIGINS env variable should be a JSON string of array of strings"
      );
    }
    if (!_.isArray(this.config.sshOrigins)) {
      throw new Error(
        "SSH_ORIGINS env variable should be a JSON string of array of strings"
      );
    }

    this.server = mainServer;

    // Retrieve all the singletons and run their .init() method
    // (this will also instantiate these singletons)
    await Promise.all(_.invokeMap(this.di.singletons(), "init"));

    // Initialize Next
    this.next = nextApp({ dev: process.env.NODE_ENV === "development" });
    await this.next.prepare();
    this.nextHandler = this.next.getRequestHandler();

    // Express and Socket.IO middleware
    const middleware = this.di.get("middleware");
    return Promise.all([
      middleware.express(this.express),
      middleware.io(this.di.get("ws").io)
    ]);
  }

  /**
   * This is what Next's getInitialProps() will see
   */
  async analyzeRequest({ path, query, locale, theme } = {}) {
    return {
      page: constants.pages[path] && constants.pages[path].page,
      query: _.assign({}, query || {}, {
        subscriptionsServer: this.config.appSubscriptionsServer,
        locale: locale || l10n.defaultLocale || null,
        theme: theme || styles.defaultTheme || null,
        appOrigin: this.config.appOrigins[0],
        proxyOrigin: this.config.appProxyOrigins[0],
        sshHost: this.config.sshOrigins[0],
        sshPort: this.config.sshPort,
        selfRegistration: this.config.selfRegistration
      })
    };
  }
}

module.exports = App;
