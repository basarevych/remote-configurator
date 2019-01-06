module.exports = {
  login: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required",
    label: "APP_AUTH_LOGIN_LABEL"
  },
  password: {
    validate: "required",
    label: "APP_AUTH_PASSWORD_LABEL"
  }
};
