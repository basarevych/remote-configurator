"use strict";

const roles = {
  AUTHENTICATED: "AUTHENTICATED", // every one except the anonymous has this
  ADMIN: "ADMIN"
};

module.exports = {
  apiBase: "/api",
  graphqlBase: "/graphql",
  socketsBase: "/ws",
  roles,
  pages: {
    "/": {
      page: "/",
      icon: "devices",
      menu: "MENU_DEVICES",
      title: "TITLE_DEVICES"
    },
    "/terminal": {
      page: "/terminal",
      icon: "terminal"
    },
    "/users": {
      page: "/users",
      icon: "users",
      menu: "MENU_USERS",
      title: "TITLE_USERS",
      roles: [roles.ADMIN]
    }
  },
  messages: {
    // client requests
    CONNECT_TERMINAL: "CONNECT_TERMINAL",
    KEYBOARD_AUTH: "KEYBOARD_AUTH",
    TERMINAL_INPUT: "TERMINAL_INPUT",
    TERMINAL_RESIZED: "TERMINAL_RESIZED",
    DISCONNECT_TERMINAL: "DISCONNECT_TERMINAL",

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
