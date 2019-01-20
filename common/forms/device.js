module.exports = {
  name: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required",
    label: "EDIT_DEVICE_NAME_LABEL"
  },
  password: {
    normalize: "rows:1",
    transform: "trim",
    validate: "password",
    label: "EDIT_DEVICE_PASSWORD_LABEL"
  }
};
