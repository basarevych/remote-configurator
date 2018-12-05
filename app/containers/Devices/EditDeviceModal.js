import { Map } from "immutable";
import { injectIntl } from "react-intl";
import { getFormValues, getFormAsyncErrors } from "redux-form/immutable";
import { startAsyncValidation, stopAsyncValidation } from "redux-form";
import { devicesOperations, devicesSelectors } from "../../state/devices";
import createForm from "../../lib/createForm";
import EditDeviceModalComponent from "../../components/devices/EditDeviceModal";

const formName = EditDeviceModalComponent.formName;

const mapStateToProps = state => {
  return {
    fieldValues: {
      [formName]: getFormValues(formName)(state) || Map()
    },
    fieldErrors: {
      [formName]: getFormAsyncErrors(formName)(state) || Map()
    },
    data: devicesSelectors.getEditModalData(state),
    isOpen: devicesSelectors.isEditModalOpen(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    updateValidation: async errors => {
      await dispatch(startAsyncValidation(formName));
      await dispatch(stopAsyncValidation(formName, errors));
    },
    onCancel: () => dispatch(devicesOperations.hideEditModal()),
    onLoad: () => dispatch(devicesOperations.load()),
    onCreate: (name, password) =>
      dispatch(devicesOperations.create({ name, password })),
    onEdit: (id, name, password) =>
      dispatch(devicesOperations.edit({ id, name, password }))
  };
};

const EditDeviceModal = injectIntl(
  createForm(EditDeviceModalComponent, mapStateToProps, mapDispatchToProps)
);
export default EditDeviceModal;
