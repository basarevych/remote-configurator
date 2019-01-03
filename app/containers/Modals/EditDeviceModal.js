import { injectIntl } from "react-intl";
import { devicesSelectors, devicesOperations } from "../../state/devices";
import connectForm from "../../lib/connectForm";
import EditDeviceModalComponent from "../../components/Modals/EditDeviceModal";

const mapStateToProps = state => {
  return {
    data: devicesSelectors.getEditModalData(state),
    isOpen: devicesSelectors.isEditModalOpen(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancel: () => dispatch(devicesOperations.hideEditModal()),
    onLoad: () => dispatch(devicesOperations.load()),
    onCreate: (name, password) =>
      dispatch(devicesOperations.reqCreate({ name, password })),
    onEdit: (id, name, password) =>
      dispatch(devicesOperations.reqEdit({ id, name, password }))
  };
};

const EditDeviceModal = injectIntl(
  connectForm(EditDeviceModalComponent, mapStateToProps, mapDispatchToProps)
);
export default EditDeviceModal;
