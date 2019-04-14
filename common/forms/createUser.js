module.exports = {
  login: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required|!ERROR_INVALID_LOGIN:re:^[a-z]+[a-z0-9]*$",
    label: "EDIT_USER_LOGIN_LABEL"
  },
  password: {
    validate: "required|password",
    label: "EDIT_USER_PASSWORD_LABEL"
  },
  isAdmin: {
    label: "EDIT_USER_ADMIN_LABEL"
  }
};
