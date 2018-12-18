"use strict";

const BuildRoute = require("./build");
const CsrfRoute = require("./csrf");
const BrowserRoute = require("./browser");

module.exports = app => ({
  build: new BuildRoute(app),
  csrf: new CsrfRoute(app),
  browser: new BrowserRoute(app)
});
