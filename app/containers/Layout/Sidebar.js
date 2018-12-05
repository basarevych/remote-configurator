import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withRouter } from "next/router";
import SidebarComponent from "../../components/Layout/Sidebar";
import { authSelectors, authOperations } from "../../state/auth";

const mapStateToProps = state => {
  return {
    roles: authSelectors.getRoles(state)
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
