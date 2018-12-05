import Router from "next/router";
import isRouteAllowed from "../../../common/isRouteAllowed";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { appOperations, appSelectors } from "../app";
import { usersOperations } from "../users";

export const setCsrf = actions.setCsrf;

const fetchStatus = () => async dispatch => {
  let status = null;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
        query {
          status {
            isAuthenticated
            login
            roles
          }
        }
      `
      )
    );
    status = response && _.get(response, "data.status", null);
  } catch (error) {
    console.error(error);
  }

  if (status) return status;

  return new Promise(resolve => setTimeout(() => resolve(fetchStatus()), 1000));
};

export const setStatus = status => async (dispatch, getState) => {
  if (process.browser && !status) status = await dispatch(fetchStatus());

  if (
    process.browser &&
    window.location.href !== "/" &&
    status &&
    status.roles
  ) {
    if (!isRouteAllowed(Router.pathname, status.roles)) {
      await dispatch(appOperations.stop());
      window.location.href = "/";
      return;
    }
  }

  if (!status) return;

  await dispatch(actions.setStatus(status));

  let socket = appSelectors.getService(getState(), { service: "socket" });
  if (socket) {
    if (selectors.isAuthenticated(getState())) socket.connect();
    else socket.disconnect();
  }
};

export const signIn = ({ login, password }) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($login: String, $password: String) {
            signIn(login: $login, password: $password) {
              success
            }
          }
        `,
        {
          login,
          password
        }
      )
    );

    if (response && _.get(response, "data.signIn.success", false)) {
      await dispatch(setStatus());
      await dispatch(usersOperations.load());
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

export const signOut = () => async dispatch => {
  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation {
            signOut {
              success
            }
          }
        `
      )
    );

    if (response && _.get(response, "data.signOut.success", false))
      return dispatch(setStatus());
  } catch (error) {
    console.error(error);
  }
};

export const updateProfile = ({ values }) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($password: String) {
            updateProfile(password: $password) {
              success
            }
          }
        `,
        {
          password: values.get("password1")
        }
      )
    );

    if (response && _.get(response, "data.updateProfile.success", false)) {
      result = true;
    } else {
      let error = response && _.get(response, "errors.0", null);
      if (error && error.code === "E_VALIDATION") result = error.details;
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};
