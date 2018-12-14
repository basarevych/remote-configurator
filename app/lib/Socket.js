import Router from "next/router";
import io from "socket.io-client";
import { appOperations, appSelectors } from "../state/app";
import { authOperations } from "../state/auth";
import { devicesOperations } from "../state/devices";
import { terminalsOperations } from "../state/terminals";
import { activeTerminalSelectors } from "../state/activeTerminal";
import { historiesOperations } from "../state/histories";
import constants from "../../common/constants";
import pkg from "../../package.json";

class Socket {
  constructor(getState, dispatch) {
    if (!process.browser) return;

    this.getState = getState;
    this.dispatch = dispatch;

    this.socket = io({
      path: constants.socketsBase,
      autoConnect: false
    });
    this.socket.on(constants.messages.HELLO, this.onHello.bind(this));
    this.socket.on(constants.messages.SET_STATUS, this.onSetStatus.bind(this));
    this.socket.on(constants.messages.SET_DEVICE, this.onSetDevice.bind(this));
    this.socket.on(
      constants.messages.DELETE_DEVICE,
      this.onDeleteDevice.bind(this)
    );
    this.socket.on(
      constants.messages.SET_TERMINAL,
      this.onSetTerminal.bind(this)
    );
    this.socket.on(
      constants.messages.DELETE_TERMINAL,
      this.onDeleteTerminal.bind(this)
    );
    this.socket.on(constants.messages.HISTORY, this.onHistory.bind(this));
    this.socket.on("disconnect", this.onDisconnect.bind(this));
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "socket";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["getState", "dispatch"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  emit(message, data, cb) {
    if (!process.browser) return;

    if (process.env.NODE_ENV === "development")
      console.log(`[WS] --> ${message}`);

    this.socket.emit(
      message,
      data,
      cb &&
        (response => {
          try {
            return cb(response);
          } catch (error) {
            console.log(error);
          }
        })
    );
  }

  connect() {
    if (!process.browser) return;

    if (!appSelectors.isConnected(this.getState())) this.socket.connect();
    this.emit(constants.messages.HELLO, { version: pkg.version });
  }

  disconnect() {
    if (!process.browser) return;

    if (appSelectors.isConnected(this.getState())) this.socket.disconnect();
  }

  async onHello(msg) {
    try {
      if (process.env.NODE_ENV === "development")
        console.log(`[WS] <-- ${constants.messages.HELLO} v${msg.version}`);

      if (msg.version !== pkg.version) {
        await this.dispatch(appOperations.stop());
        return setTimeout(() => window.location.reload(), 3000);
      }

      await this.dispatch(appOperations.setConnected({ isConnected: true }));
    } catch (error) {
      console.error(error);
    }
  }

  async onSetStatus(msg) {
    try {
      if (process.env.NODE_ENV === "development") {
        console.log(
          `[WS] <-- ${constants.messages.SET_STATUS} authenticated: ${
            msg.isAuthenticated
          }`
        );
      }

      await this.dispatch(authOperations.setStatus(msg));
    } catch (error) {
      console.error(error);
    }
  }

  async onSetDevice(msg) {
    try {
      if (process.env.NODE_ENV === "development") {
        console.log(
          `[WS] <-- ${constants.messages.SET_DEVICE} deviceId: ${msg.deviceId}`
        );
      }

      await this.dispatch(devicesOperations.set(msg));
    } catch (error) {
      console.error(error);
    }
  }

  async onDeleteDevice(msg) {
    try {
      if (process.env.NODE_ENV === "development") {
        console.log(
          `[WS] <-- ${constants.messages.DELETE_DEVICE} deviceId: ${
            msg.deviceId
          }`
        );
      }

      await this.dispatch(devicesOperations.remove(msg));
    } catch (error) {
      console.error(error);
    }
  }

  async onSetTerminal(msg) {
    try {
      if (process.env.NODE_ENV === "development") {
        console.log(
          `[WS] <-- ${constants.messages.SET_TERMINAL} terminalId: ${
            msg.terminalId
          }`
        );
      }

      await this.dispatch(terminalsOperations.set(msg));
      if (
        Router.pathname === "/" &&
        _.get(msg, ["data", "deviceId"]) ===
          activeTerminalSelectors.getDeviceId(this.getState())
      ) {
        Router.push({
          pathname: "/terminal",
          query: { terminalId: msg.terminalId }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async onDeleteTerminal(msg) {
    try {
      if (process.env.NODE_ENV === "development") {
        console.log(
          `[WS] <-- ${constants.messages.DELETE_TERMINAL} terminalId: ${
            msg.terminalId
          }`
        );
      }

      if (
        Router.pathname === "/terminal" &&
        _.get(Router, ["query", "terminalId"]) === msg.terminalId
      ) {
        Router.push("/");
      }
      await this.dispatch(terminalsOperations.remove(msg));
    } catch (error) {
      console.error(error);
    }
  }

  async onHistory(msg) {
    try {
      /*
      if (process.env.NODE_ENV === "development") {
        console.log(
          `[WS] <-- ${constants.messages.HISTORY} historyId: ${msg.historyId}`
        );
      }
      */

      await this.dispatch(historiesOperations.add(msg));
    } catch (error) {
      console.error(error);
    }
  }

  async onDisconnect() {
    try {
      if (process.env.NODE_ENV === "development")
        console.log("[WS] disconnected");

      await this.dispatch(appOperations.setConnected({ isConnected: false }));
      await this.dispatch(devicesOperations.clear());
      await this.dispatch(terminalsOperations.clear());
      await this.dispatch(historiesOperations.clear());
    } catch (error) {
      console.error(error);
    }
  }
}

export default Socket;
