import { Map } from "immutable";
import { injectIntl } from "react-intl";
import { getFormValues, getFormAsyncErrors } from "redux-form/immutable";
import { startAsyncValidation, stopAsyncValidation } from "redux-form";
import { activeTerminalSelectors } from "../../state/activeTerminal";
import { terminalsOperations } from "../../state/terminals";
import createForm from "../../lib/createForm";
import KeyboardAuthModalComponent from "../../components/Ssh/KeyboardAuthModal";

const formName = KeyboardAuthModalComponent.formName;

const mapStateToProps = state => {
  let info = activeTerminalSelectors.getAuthInfo(state);
  return {
    fieldValues: {
      [formName]: getFormValues(formName)(state) || Map()
    },
    fieldErrors: {
      [formName]: getFormAsyncErrors(formName)(state) || Map()
    },
    isOpen: !!info.terminalId,
    ...info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    updateValidation: async errors => {
      await dispatch(startAsyncValidation(formName));
      await dispatch(stopAsyncValidation(formName, errors));
    },
    onCancel: terminalId =>
      dispatch(terminalsOperations.cancelKeyboardAuth({ terminalId })),
    onFinish: (terminalId, reply) =>
      dispatch(terminalsOperations.finishKeyboardAuth({ terminalId, reply }))
  };
};

const KeyboardAuthModal = injectIntl(
  createForm(KeyboardAuthModalComponent, mapStateToProps, mapDispatchToProps)
);
export default KeyboardAuthModal;
