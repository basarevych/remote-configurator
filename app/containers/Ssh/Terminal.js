import { connect } from "react-redux";
import { List } from "immutable";
import { withRouter } from "next/router";
import TerminalComponent from "../../components/Ssh/Terminal";
import { terminalsSelectors, terminalsOperations } from "../../state/terminals";
import { historiesSelectors } from "../../state/histories";

const mapStateToProps = (state, props) => {
  return {
    isConnected: terminalsSelectors.hasTerminal(state, props),
    name: terminalsSelectors.getTerminalName(state, props),
    address: terminalsSelectors.getTerminalAddress(state, props),
    history: historiesSelectors.getList(state, props) || List([])
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
