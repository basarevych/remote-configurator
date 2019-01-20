import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";
import SidebarComponent, { styles } from "./Sidebar";
import { authSelectors, authOperations } from "../../auth/state";
import { devicesSelectors } from "../../devices/state";
import { terminalsSelectors } from "../../terminals/state";

const mapStateToProps = state => {
  return {
    roles: authSelectors.getRoles(state),
    terminals: terminalsSelectors.getTerminalsMap(state),
    getDeviceName: devicesSelectors.getName.bind(devicesSelectors, state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(authOperations.signOut())
  };
};

const Sidebar = withRouter(
  withStyles(styles, { withTheme: true })(
    injectIntl(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(SidebarComponent)
    )
  )
);

export default Sidebar;
