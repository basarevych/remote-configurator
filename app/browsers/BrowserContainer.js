import { connect } from "react-redux";
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";
import BrowserComponent, { styles } from "./Browser";
import { appSelectors } from "../app/state";
import { devicesSelectors } from "../devices/state";

const mapStateToProps = (state, props) => {
  return {
    appOrigin: appSelectors.getAppOrigin(state),
    name: devicesSelectors.getName(state, props),
    address: devicesSelectors.getAddress(state, props)
  };
};

const Browser = withStyles(styles)(
  withRouter(connect(mapStateToProps)(BrowserComponent))
);
export default Browser;
