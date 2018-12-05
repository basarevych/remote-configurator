import { createSelector } from "reselect";
import { Map } from "immutable";

export const getList = createSelector(
  state => state.getIn(["devices", "online"]),
  state => state.getIn(["terminals", "online"]),
  (devices, terminals) => {
    return devices // eslint-disable-line lodash/prefer-lodash-method
      .map((deviceInfo, deviceId) =>
        Map({
          id: deviceId,
          name: deviceInfo.get("name"),
          cameraId: deviceInfo.get("cameraId"),
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
      )
      .toList()
      .sort((a, b) =>
        a
          .get("name")
          .toString()
          .localeCompare(b.get("name").toString())
      );
  }
);

export const isEditModalOpen = state =>
  state.getIn(["devices", "isEditModalOpen"]);

export const getEditModalData = state => {
  let id = state.getIn(["devices", "editModalDeviceId"]);
  if (!id) return null;

  // eslint-disable-next-line
  return state.getIn(["devices", "list"]).find(item => item.get("id") === id);
};
