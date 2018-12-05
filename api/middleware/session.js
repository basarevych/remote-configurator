"use strict";

const session = require("express-session");
const LokiStore = require("connect-loki")(session);

module.exports = app => {
  const store = new LokiStore({
    path: app.config.sessionDbPath,
    ttl: app.config.sessionMaxAge
  });

  const sessionMiddleware = session({
    secret: app.config.sessionSecret,
    store,
    resave: false,
    rolling: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: app.config.sessionMaxAge
    }
  });

  return {
    express: sessionMiddleware,
    socket: (socket, next) =>
      socket.request.res
        ? sessionMiddleware(socket.request, socket.request.res, next)
        : next()
  };
};
