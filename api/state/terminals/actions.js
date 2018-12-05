"use strict";

const types = require("./types");

const create = data => _.assign({ type: types.CREATE }, data);

const set = data => _.assign({ type: types.SET }, data);

const remove = ({ terminalId }) => ({
  type: types.REMOVE,
  terminalId
});

module.exports = {
  create,
  set,
  remove
};
