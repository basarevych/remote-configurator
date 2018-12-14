import { devicesSelectors } from "../devices";

export const getTerminalsMap = state => state.getIn(["terminals", "online"]);

export const getTerminalMap = (state, props) =>
  state.getIn(["terminals", "online", props.terminalId]);

export const getTerminalName = (state, props) =>
  state.getIn(["terminals", "online", props.terminalId, "name"]);

export const getTerminalAddress = (state, props) => {
  let terminal = state.getIn(["terminals", "online", props.terminalId]);
  if (!terminal) return "";
  return devicesSelectors.getAddress(state, {
    deviceId: terminal.get("deviceId")
  });
};
