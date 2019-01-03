import { injectIntl } from "react-intl";
import { appSelectors } from "../../state/app";
import { authSelectors, authOperations } from "../../state/auth";
import connectForm from "../../lib/connectForm";
import AppAuthModalComponent from "../../components/Modals/AppAuthModal";

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

const AppAuthModal = injectIntl(
  connectForm(AppAuthModalComponent, mapStateToProps, mapDispatchToProps)
);
export default AppAuthModal;
