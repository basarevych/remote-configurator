import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { appSelectors } from "../app/state";
import { authSelectors, authOperations } from "./state";
import AppAuthModalComponent, { styles } from "./AppAuthModal";

const mapStateToProps = state => {
  return {
    isOpen:
      appSelectors.isStarted(state) &&
      appSelectors.getStatusCode(state) === 200 &&
      !authSelectors.isAuthenticated(state),
    isSelfRegistrationEnabled: appSelectors.getSelfRegistration(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: (login, password) =>
      dispatch(authOperations.signIn({ login, password }))
  };
};

const AppAuthModal = withStyles(styles)(
  injectIntl(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(AppAuthModalComponent)
  )
);

export default AppAuthModal;
