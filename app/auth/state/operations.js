import * as actions from "./actions";
import * as selectors from "./selectors";
import { getFormErrors } from "../../app/forms/connectForm";
import constants from "../../../common/constants";
import SignInMutation from "../mutations/SignIn";
import SignOutMutation from "../mutations/SignOut";

export const setCookie = actions.setCookie;
export const setCsrf = actions.setCsrf;

const fetchStatus = () => async (dispatch, getState, di) => {
  try {
    const fetcher = di.get("fetcher");
    return await fetcher.fetch({ resource: `${constants.apiBase}/status` });
  } catch (error) {
    console.error(`STATUS: ${error.message}`);
  }

  return new Promise(resolve => setTimeout(() => resolve(fetchStatus()), 3000));
};

export const setStatus = status => async (dispatch, getState, di) => {
  if (process.browser && !status) status = await dispatch(fetchStatus());
  if (!status) return;

  await dispatch(actions.setStatus(status));

  if (process.browser) {
    let socket = di.get("socket");
    if (selectors.isAuthenticated(getState())) socket.connect();
    else socket.disconnect();
  }
};

export const signIn = ({ login, password }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await SignInMutation(di, { login, password });
  if (_.get(data, "data.signIn.success", false)) {
    await dispatch(setStatus());
    if (process.browser && _.isFunction(window.__NEXT_PAGE_INIT))
      await window.__NEXT_PAGE_INIT({ store: window.__NEXT_REDUX_STORE__ });
    return true;
  }
  return getFormErrors(data, "APP_AUTH_FAILED");
};

export const signOut = () => async (dispatch, getState, di) => {
  let data = await SignOutMutation(di);
  if (_.get(data, "data.signOut.success", false)) {
    await dispatch(setStatus());
    return true;
  }

  return false;
};
