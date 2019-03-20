import * as actions from "./actions";
import { authOperations } from "../../auth/state";

export const setStatusCode = actions.setStatusCode;
export const setConnected = actions.setConnected;
export const setLocale = actions.setLocale;
export const stop = actions.stop;

// called in App.getInitialProps()
export const create = ({
  statusCode,
  cookie,
  csrf,
  status,
  subscriptionsServer,
  appOrigin,
  proxyOrigin,
  sshHost,
  sshPort,
  selfRegistration
}) => async dispatch => {
  await dispatch(
    actions.create({
      subscriptionsServer,
      appOrigin,
      proxyOrigin,
      sshHost,
      sshPort,
      selfRegistration
    })
  );
  if (statusCode) await dispatch(setStatusCode({ code: statusCode }));
  if (cookie) await dispatch(authOperations.setCookie({ cookie }));
  if (csrf) await dispatch(authOperations.setCsrf({ csrf }));
  if (status) await dispatch(authOperations.setStatus(status));
};

// called in App.costructor() client side
export const start = () => {
  return async dispatch => {
    await dispatch(authOperations.setStatus());
    return dispatch(actions.start());
  };
};

export const setCookie = ({ name, value, days }) => {
  return async (dispatch, getState, di) => {
    di.get("cookie").set(name, value, days);
  };
};

export const getCookie = ({ name }) => {
  return async (dispatch, getState, di) => {
    return di.get("cookie").get(name);
  };
};

export const getToken = () => {
  return async (dispatch, getState, di) => {
    return di.get("fetcher").getToken();
  };
};
