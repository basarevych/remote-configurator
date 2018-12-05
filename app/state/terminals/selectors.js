export const getTerminalsMap = state => state.getIn(["terminals", "online"]);

export const getTerminalMap = (state, props) =>
  state.getIn(["terminals", "online", props.terminalId]);
