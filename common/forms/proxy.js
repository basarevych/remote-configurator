module.exports = {
  host: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required",
    label: "PROXY_HOST_LABEL"
  },
  port: {
    normalize: "rows:1|integer",
    transform: "trim",
    validate: "required",
    label: "PROXY_PORT_LABEL"
  },
  isAuthNeeded: {
    label: "PROXY_AUTH_LABEL"
  },
  login: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    label: "PROXY_LOGIN_LABEL"
  },
  password: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    label: "PROXY_PASSWORD_LABEL"
  }
};
