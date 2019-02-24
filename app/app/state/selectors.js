export const getCreated = state => state.getIn(["app", "created"]);

export const getStatusCode = state => state.getIn(["app", "statusCode"]);

export const getSubscriptionsServer = state =>
  state.getIn(["app", "subscriptionsServer"]);

export const getAppOrigin = state => state.getIn(["app", "appOrigin"]);

export const getProxyOrigin = state => state.getIn(["app", "proxyOrigin"]);

export const getSshHost = state => state.getIn(["app", "sshHost"]);

export const getSshPort = state => state.getIn(["app", "sshPort"]);

export const getSelfRegistration = state =>
  state.getIn(["app", "selfRegistration"]);

export const getLocale = state => state.getIn(["app", "locale"]);

export const isStarted = state => state.getIn(["app", "isStarted"]);

export const isStopped = state => state.getIn(["app", "isStopped"]);

export const isConnected = state => state.getIn(["app", "isConnected"]);
