import { Map } from "immutable";
import { createSelector } from "reselect";

export const getOnline = createSelector(
  state => state.getIn(["devices", "online"]),
  state => state.getIn(["terminals", "online"]),
  (devices, terminals) => {
    return devices // eslint-disable-line lodash/prefer-lodash-method
      .map((deviceInfo, deviceId) =>
        deviceInfo.set(
          "terminals",
          terminals // eslint-disable-line lodash/prefer-lodash-method
            .map((terminalInfo, terminalId) => ({
              id: terminalId,
              valid: terminalInfo.get("deviceId") === deviceId
            }))
            .toList()
            .filter(item => !!item.valid)
            .map(item => item.id)
        )
      );
  }
);

export const getDeviceInfo = createSelector(
  state => state.getIn(["devices", "online"]),
  (state, props) => props.deviceId,
  (online, deviceId) => {
    const info = online.get(deviceId);
    return info && info.toJS();
  }
);

export const getName = (state, props) =>
  state.getIn(["devices", "online", props.deviceId, "name"]) || "";

export const getAddress = (state, props) =>
  state.getIn(["devices", "online", props.deviceId, "address"]) || "";

export const getSelected = createSelector(
  state => state.getIn(["devices", "selected"]),
  selected => selected.toJS()
);

export const isEditModalOpen = state =>
  state.getIn(["devices", "isEditModalOpen"]);

export const getEditModalDeviceId = state =>
  state.getIn(["devices", "editModalDeviceId"]);

export const isCredentialsModalOpen = state =>
  state.getIn(["devices", "isCredentialsModalOpen"]);

export const getCredentialsModalDeviceId = state =>
  state.getIn(["devices", "credentialsModalDeviceId"]);

export const getCredentialsModalData = state => {
  let id = state.getIn(["devices", "credentialsModalDeviceId"]);
  if (!id) return Map();

  const data =
    // eslint-disable-next-line lodash/prefer-lodash-method
    state
      .getIn(["devices", "online"])
      .find(item => item.get("deviceId") === id) || Map();

  return data.toJS();
};

export const getInteractiveModalDeviceId = state =>
  state
    .getIn(["devices", "online"])
    .findKey(device => !!device.getIn(["auth", "prompts"])) || null;

export const isInteractiveModalOpen = state =>
  !!getInteractiveModalDeviceId(state);

export const getInteractiveModalData = state => {
  const id = getInteractiveModalDeviceId(state);

  const data = (id && state.getIn(["devices", "online", id, "auth"])) || Map();
  return data.toJS();
};
