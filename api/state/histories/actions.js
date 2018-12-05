"use strict";

const types = require("./types");

const add = data => _.assign({ type: types.ADD }, data);

const destroy = ({ historyId, terminalId }) => ({
  type: types.DESTROY,
  historyId,
  terminalId
});

module.exports = {
  add,
  destroy
};
