import { createSelector } from "reselect";
import { Map } from "immutable";

export const getList = state => state.getIn(["devices", "list"]);

export const getOnline = createSelector(
  state => state.getIn(["devices", "online"]),
  state => state.getIn(["terminals", "online"]),
  (devices, terminals) => {
    return devices // eslint-disable-line lodash/prefer-lodash-method
      .map((deviceInfo, deviceId) =>
        Map({
          address: deviceInfo.get("address"),
          terminals: terminals // eslint-disable-line lodash/prefer-lodash-method
            .map((terminalInfo, terminalId) => ({
              id: terminalId,
              valid:
                terminalInfo.get("deviceId") === deviceId &&
                terminalInfo.get("isConnecting")
            }))
            .toList()
            .filter(item => !!item.valid)
            .map(item => item.id)
        })
      );
  }
);

export const getName = (state, props) => {
  // eslint-disable-next-line lodash/prefer-lodash-method
  let device = state
    .getIn(["devices", "list"])
    .find(item => item.get("id") === props.deviceId);
  return device ? device.get("name") : "";
};

export const getAddress = (state, props) =>
  state.getIn(["devices", "online", props.deviceId, "address"]) || "";

export const getSelected = state =>
  // eslint-disable-next-line lodash/prefer-lodash-method
  state.getIn(["devices", "list"]).filter(item => !!item.get("isSelected"));

export const getNumSelected = state => getSelected(state).size;

export const isAllSelected = state =>
  getList(state).size === getSelected(state).size;

export const isAllDeselected = state => getSelected(state).size === 0;

export const isEditModalOpen = state =>
  state.getIn(["devices", "isEditModalOpen"]);

export const getEditModalData = state => {
  let id = state.getIn(["devices", "editModalDeviceId"]);
  if (!id) return null;

  // eslint-disable-next-line
  return state.getIn(["devices", "list"]).find(item => item.get("id") === id);
};
