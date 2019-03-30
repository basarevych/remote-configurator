"use strict";

const roles = {
  AUTHENTICATED: "AUTHENTICATED", // every one who is authorized has this
  ADMIN: "ADMIN"
};

module.exports = {
  apiBase: "/api",
  graphqlBase: "/graphql",
  socketsBase: "/ws",
  roles,
  pages: {
    "/": {
      page: "/"
    },
    "/devices": {
      page: "/devices",
      icon: "devices",
      menu: "MENU_DEVICES",
      title: "TITLE_DEVICES",
      isAllowed: userRoles => _.includes(userRoles, roles.AUTHENTICATED)
    },
    "/terminal": {
      page: "/terminal",
      icon: "terminal",
      isAllowed: userRoles => _.includes(userRoles, roles.AUTHENTICATED)
    },
    "/browser": {
      page: "/browser",
      icon: "browser",
      isAllowed: userRoles => _.includes(userRoles, roles.AUTHENTICATED)
    },
    "/users": {
      page: "/users",
      icon: "users",
      menu: "MENU_USERS",
      title: "TITLE_USERS",
      isAllowed: userRoles => _.includes(userRoles, roles.ADMIN)
    }
  },
  messages: {
    // client requests
    CONNECT_DEVICE: "CONNECT_DEVICE",
    FINISH_AUTH: "FINISH_AUTH",
    DISCONNECT_DEVICE: "DISCONNECT_DEVICE",

    CONNECT_TERMINAL: "CONNECT_TERMINAL",
    TERMINAL_INPUT: "TERMINAL_INPUT",
    TERMINAL_RESIZED: "TERMINAL_RESIZED",
    DISCONNECT_TERMINAL: "DISCONNECT_TERMINAL",

    CONNECT_BROWSER: "CONNECT_BROWSER",

    // responses and commands
    HELLO: "HELLO",
    SET_STATUS: "SET_STATUS",

    SET_DEVICE: "SET_DEVICE",
    DELETE_DEVICE: "DELETE_DEVICE",

    SET_TERMINAL: "SET_TERMINAL",
    DELETE_TERMINAL: "DELETE_TERMINAL",

    HISTORY: "HISTORY"
  },
  events: {
    FONTS_LOADED: "FONTS_LOADED"
  },
  historySize: 30,
  commandPort: 22
};
