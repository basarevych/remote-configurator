import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { authSelectors } from "../auth/state";
import BrowserPageComponent, { styles } from "./BrowserPage";

const mapStateToProps = state => {
  return {
    userRoles: authSelectors.getRoles(state)
  };
};

const BrowserPage = withStyles(styles)(
  connect(mapStateToProps)(BrowserPageComponent)
);
BrowserPage.getInitialProps = BrowserPageComponent.getInitialProps;

export default BrowserPage;
