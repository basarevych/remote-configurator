"use strict";

const BuildRoute = require("./build");
const CsrfRoute = require("./csrf");

module.exports = app => ({
  build: new BuildRoute(app),
  csrf: new CsrfRoute(app)
});
