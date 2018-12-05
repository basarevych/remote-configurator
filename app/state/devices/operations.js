import * as actions from "./actions";
import { appOperations } from "../app";
import { terminalsSelectors, terminalsOperations } from "../terminals";

export const clear = actions.clear;
export const set = actions.set;
export const showEditModal = actions.showEditModal;
export const hideEditModal = actions.hideEditModal;

export const remove = ({ deviceId }) => {
  return async (dispatch, getState) => {
    await Promise.all(
      // eslint-disable-next-line lodash/prefer-lodash-method
      terminalsSelectors
        .getTerminalsMap(getState())
        .map((terminal, terminalId) => {
          if (terminal.get("deviceId") === deviceId)
            return dispatch(terminalsOperations.remove({ terminalId }));
        })
        .toList()
        .filter(item => !!item)
        .toJS()
    );

    return dispatch(actions.remove({ deviceId }));
  };
};

export const load = ({ req } = {}) => async dispatch => {
  let devices;
  if (req) {
    devices = _.map(
      await req.di.get("repository.devices").getDevices(req),
      device =>
        _.assign({}, device, {
          whenCreated: device.whenCreated.valueOf(),
          whenUpdated: device.whenUpdated.valueOf()
        })
    );
  } else {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          query {
            devices {
              id
              name
            }
          }
        `
      )
    );
    devices = response && _.get(response, "data.devices");
  }
  await dispatch(actions.setList({ list: devices }));
};

export const reqCreate = ({ name, password }) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($name: String, $password: String) {
            createDevice(name: $name, password: $password) {
              success
            }
          }
        `,
        {
          name,
          password
        }
      )
    );

    if (response && _.get(response, "data.createDevice.success", false)) {
      await dispatch(actions.hideEditModal());
      return true;
    } else {
      let error = response && _.get(response, "errors.0", null);
      if (error && error.code === "E_VALIDATION") result = error.details;
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const reqEdit = ({ id, name, password }) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($id: String, $name: String, $password: String) {
            editDevice(id: $id, name: $name, password: $password) {
              success
            }
          }
        `,
        {
          id,
          name,
          password
        }
      )
    );

    if (response && _.get(response, "data.editDevice.success", false)) {
      await dispatch(actions.hideEditModal());
      return true;
    } else {
      let error = response && _.get(response, "errors.0", null);
      if (error && error.code === "E_VALIDATION") result = error.details;
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const reqRemove = ({ id }) => async dispatch => {
  let response = await dispatch(
    appOperations.gqlQuery(
      `
        mutation ($id: String) {
          deleteDevice(id: $id) {
            success
          }
        }
      `,
      {
        id
      }
    )
  );
  let success =
    (response && _.get(response, "data.deleteDevice.success")) || false;
  return success;
};
