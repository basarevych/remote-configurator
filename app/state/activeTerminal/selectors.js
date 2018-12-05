export const getDeviceId = state => state.getIn(["activeTerminal", "deviceId"]);

export const isCollectingCredentials = state =>
  state.getIn(["activeTerminal", "isCollectingCredentials"]) || false;

export const getAuthInfo = state => {
  // eslint-disable-next-line lodash/prefer-lodash-method
  let terminals = state
    .get("terminals")
    .filter(item => !!item.getIn(["auth", "prompts"]));

  if (!terminals.size) {
    return {
      terminalId: null,
      banner: null,
      prompts: []
    };
  }

  let terminalId = Array.from(terminals.keys())[0];

  return {
    terminalId,
    banner: terminals.getIn([terminalId, "auth", "banner"]),
    prompts: terminals.getIn([terminalId, "auth", "prompts"]).toJS()
  };
};
