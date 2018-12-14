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
    name: terminalsSelectors.getTerminalName(state, props),
    address: terminalsSelectors.getTerminalAddress(state, props),
    status: terminal ? terminal.get("status") : null,
    history: terminal
      ? historiesSelectors.getList(state, props) || List([])
      : List([])
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onInput: data =>
      dispatch(
        terminalsOperations.sendInput({ terminalId: props.terminalId, data })
      ),
    onResize: (cols, rows, width, height) =>
      dispatch(
        terminalsOperations.sendResize({
          terminalId: props.terminalId,
          cols,
          rows,
          width,
          height
        })
      ),
    onClose: () =>
      dispatch(terminalsOperations.kill({ terminalId: props.terminalId }))
  };
};

const Terminal = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TerminalComponent)
);
export default Terminal;
