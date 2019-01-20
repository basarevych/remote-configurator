import { connect } from "react-redux";
import { List } from "immutable";
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";
import TerminalComponent, { styles } from "./Terminal";
import { terminalsSelectors, terminalsOperations } from "../terminals/state";
import { historiesSelectors } from "../histories/state/";

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

const Terminal = withStyles(styles)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(TerminalComponent)
  )
);
export default Terminal;
