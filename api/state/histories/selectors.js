"use strict";

const hasHistory = (state, props) =>
  state.hasIn(["histories", props.historyId || props.terminalId]);

const getHistoryList = (state, props) =>
  state.getIn(["histories", props.historyId || props.terminalId]);

module.exports = {
  hasHistory,
  getHistoryList
};
