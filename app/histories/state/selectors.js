import { List } from "immutable";

export const getList = (state, props) =>
  state.getIn(["histories", props.historyId || props.terminalId]) || List([]);
