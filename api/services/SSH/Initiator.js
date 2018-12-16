const debug = require("debug")("app:initiator");
const Command = require("./Command");
const { devicesOperations, devicesSelectors } = require("../../state/devices");

class Initiator extends Command {
  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "ssh.initiator";
  }

  async start(username, password) {
    if (!this.deviceId) return;

    await this.dispatch(
      devicesOperations.set({
        deviceId: this.deviceId,
        status: "Signing in...",
        remoteUsername: username,
        remotePassword: password,
        isLoggingIn: true,
        isLoggedIn: false,
        auth: null
      })
    );

    let onConnected, onDisconnected;
    onConnected = async () => {
      this.removeListener("connected", onConnected);
      this.removeListener("disconnected", onDisconnected);
      if (
        devicesSelectors.hasDevice(this.getState(), {
          deviceId: this.deviceId
        })
      ) {
        await this.dispatch(
          devicesOperations.set({
            deviceId: this.deviceId,
            status: "Ready",
            isLoggingIn: true,
            isLoggedIn: true,
            auth: null
          })
        );
      }
      await this.stop();
    };
    onDisconnected = async () => {
      this.removeListener("connected", onConnected);
      this.removeListener("disconnected", onDisconnected);
      if (
        devicesSelectors.hasDevice(this.getState(), {
          deviceId: this.deviceId
        })
      ) {
        await this.dispatch(
          devicesOperations.set({
            deviceId: this.deviceId,
            remoteUsername: null,
            remotePassword: null,
            isLoggingIn: false,
            isLoggedIn: false,
            auth: null
          })
        );
      }
    };

    this.on("connected", onConnected);
    this.on("disconnected", onDisconnected);

    return super.start();
  }

  async onPassword(name, instructions, instructionsLang, prompts, finish) {
    debug(`Managed keybaord-interactive from ${this.deviceId}`);
    try {
      if (
        !devicesSelectors.hasDevice(this.getState(), {
          deviceId: this.deviceId
        })
      ) {
        throw new Error("Device disconnected");
      }

      await this.dispatch(
        devicesOperations.set({
          deviceId: this.deviceId,
          auth: {
            finish,
            banner: instructions,
            prompts
          }
        })
      );
    } catch (error) {
      this.onError(error);
    }
  }
}

module.exports = Initiator;
