import { Map } from "immutable";
import { injectIntl } from "react-intl";
import { getFormValues, getFormAsyncErrors } from "redux-form/immutable";
import { startAsyncValidation, stopAsyncValidation } from "redux-form";
import { devicesSelectors, devicesOperations } from "../../state/devices";
import createForm from "../../lib/createForm";
import CredentialsModalComponent from "../../components/Modals/CredentialsModal";

const formName = CredentialsModalComponent.formName;

const mapStateToProps = state => {
  return {
    fieldValues: {
      [formName]: getFormValues(formName)(state) || Map()
    },
    fieldErrors: {
      [formName]: getFormAsyncErrors(formName)(state) || Map()
    },
    isOpen: devicesSelectors.isCredentialsModalOpen(state),
    name: devicesSelectors.getName(state, {
      deviceId: devicesSelectors.getCredentialsModalDeviceId(state)
    }),
    data: devicesSelectors.getCredentialsModalData(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    updateValidation: async errors => {
      await dispatch(startAsyncValidation(formName));
      await dispatch(stopAsyncValidation(formName, errors));
    },
    onCancel: () => dispatch(devicesOperations.cancelAuth()),
    onFinish: (username, password) =>
      dispatch(devicesOperations.finishAuth({ username, password }))
  };
};

const CredentialsModal = injectIntl(
  createForm(CredentialsModalComponent, mapStateToProps, mapDispatchToProps)
);
export default CredentialsModal;
