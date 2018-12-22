import { Map } from "immutable";
import { injectIntl } from "react-intl";
import { getFormValues, getFormAsyncErrors } from "redux-form/immutable";
import { startAsyncValidation, stopAsyncValidation } from "redux-form";
import { appSelectors } from "../../state/app";
import { authSelectors, authOperations } from "../../state/auth";
import createForm from "../../lib/createForm";
import AppAuthModalComponent from "../../components/Modals/AppAuthModal";

const formName = AppAuthModalComponent.formName;

const mapStateToProps = state => {
  return {
    fieldValues: {
      [formName]: getFormValues(formName)(state) || Map()
    },
    fieldErrors: {
      [formName]: getFormAsyncErrors(formName)(state) || Map()
    },
    isOpen:
      appSelectors.isStarted(state) &&
      appSelectors.getStatusCode(state) === 200 &&
      !authSelectors.isAuthenticated(state),
    isSelfRegistrationEnabled: appSelectors.getSelfRegistration(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    updateValidation: async errors => {
      await dispatch(startAsyncValidation(formName));
      await dispatch(stopAsyncValidation(formName, errors));
    },
    onSignIn: (login, password) =>
      dispatch(authOperations.signIn({ login, password }))
  };
};

const AppAuthModal = injectIntl(
  createForm(AppAuthModalComponent, mapStateToProps, mapDispatchToProps)
);
export default AppAuthModal;
