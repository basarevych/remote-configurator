module.exports = {
  login: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required",
    label: "SETUP_AUTH_LOGIN_LABEL"
  },
  password: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    label: "SETUP_AUTH_PASSWORD_LABEL"
  }
};
