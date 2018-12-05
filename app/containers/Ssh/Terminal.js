import { connect } from "react-redux";
import { List } from "immutable";
import { withRouter } from "next/router";
import TerminalComponent from "../../components/Ssh/Terminal";
import { terminalsSelectors, terminalsOperations } from "../../state/terminals";
import { historiesSelectors } from "../../state/histories";

const mapStateToProps = (state, props) => {
  let terminal = terminalsSelectors.getTerminalMap(state, props);
  return {
    id: terminal ? props.terminalId : null,
    isConnecting: terminal ? terminal.get("isConnecting") : false,
    isConnected: terminal ? terminal.get("isConnected") : false,
    status: terminal ? terminal.get("status") : null,
    history: terminal
      ? historiesSelectors.getList(state, props) || List([])
      : List([])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInput: (terminalId, data) =>
      dispatch(terminalsOperations.sendInput({ terminalId, data })),
    onResize: (terminalId, cols, rows, width, height) =>
      dispatch(
        terminalsOperations.sendResize({
          terminalId,
          cols,
          rows,
          width,
          height
        })
      )
  };
};

const Terminal = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TerminalComponent)
);
export default Terminal;
