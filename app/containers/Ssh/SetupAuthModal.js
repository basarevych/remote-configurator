import { Map } from "immutable";
import { injectIntl } from "react-intl";
import { getFormValues, getFormAsyncErrors } from "redux-form/immutable";
import { startAsyncValidation, stopAsyncValidation } from "redux-form";
import { activeTerminalSelectors } from "../../state/activeTerminal";
import { terminalsOperations } from "../../state/terminals";
import createForm from "../../lib/createForm";
import SetupAuthModalComponent from "../../components/Ssh/SetupAuthModal";

const formName = SetupAuthModalComponent.formName;

const mapStateToProps = state => {
  return {
    fieldValues: {
      [formName]: getFormValues(formName)(state) || Map()
    },
    fieldErrors: {
      [formName]: getFormAsyncErrors(formName)(state) || Map()
    },
    deviceId: activeTerminalSelectors.getDeviceId(state),
    isOpen: activeTerminalSelectors.isCollectingCredentials(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    updateValidation: async errors => {
      await dispatch(startAsyncValidation(formName));
      await dispatch(stopAsyncValidation(formName, errors));
    },
    onCancel: deviceId =>
      dispatch(terminalsOperations.cancelSetupAuth({ deviceId })),
    onFinish: (deviceId, username, password) =>
      dispatch(
        terminalsOperations.finishSetupAuth({ deviceId, username, password })
      )
  };
};

const SetupAuthModal = injectIntl(
  createForm(SetupAuthModalComponent, mapStateToProps, mapDispatchToProps)
);
export default SetupAuthModal;
