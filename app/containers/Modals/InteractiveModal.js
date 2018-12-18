import { Map } from "immutable";
import { injectIntl } from "react-intl";
import { getFormValues, getFormAsyncErrors } from "redux-form/immutable";
import { startAsyncValidation, stopAsyncValidation } from "redux-form";
import { devicesSelectors, devicesOperations } from "../../state/devices";
import createForm from "../../lib/createForm";
import InteractiveModalComponent from "../../components/Modals/InteractiveModal";

const formName = InteractiveModalComponent.formName;

const mapStateToProps = state => {
  return {
    fieldValues: {
      [formName]: getFormValues(formName)(state) || Map()
    },
    fieldErrors: {
      [formName]: getFormAsyncErrors(formName)(state) || Map()
    },
    isOpen: devicesSelectors.isInteractiveModalOpen(state),
    name: devicesSelectors.getName(state, {
      deviceId: devicesSelectors.getInteractiveModalDeviceId(state)
    }),
    data: devicesSelectors.getInteractiveModalData(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    updateValidation: async errors => {
      await dispatch(startAsyncValidation(formName));
      await dispatch(stopAsyncValidation(formName, errors));
    },
    onCancel: () => dispatch(devicesOperations.doInteractiveAuth()),
    onFinish: reply => dispatch(devicesOperations.doInteractiveAuth({ reply }))
  };
};

const InteractiveModal = injectIntl(
  createForm(InteractiveModalComponent, mapStateToProps, mapDispatchToProps)
);
export default InteractiveModal;
