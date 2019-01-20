import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { authSelectors } from "../auth/state";
import TerminalPageComponent, { styles } from "./TerminalPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const TerminalPage = withStyles(styles)(
  connect(mapStateToProps)(TerminalPageComponent)
);
TerminalPage.getInitialProps = TerminalPageComponent.getInitialProps;

export default TerminalPage;
