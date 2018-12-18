import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withRouter } from "next/router";
import SidebarComponent from "../../components/Layout/Sidebar";
import { authSelectors, authOperations } from "../../state/auth";
import { devicesSelectors } from "../../state/devices";
import { terminalsSelectors } from "../../state/terminals";

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
  injectIntl(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(SidebarComponent)
  )
);

export default Sidebar;
