import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { devicesOperations, devicesSelectors } from "./state";
import EditDeviceModalComponent, { styles } from "./EditDeviceModal";

const mapStateToProps = state => {
  return {
    isOpen: devicesSelectors.isEditModalOpen(state),
    currentId: devicesSelectors.getEditModalDeviceId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancel: () => dispatch(devicesOperations.hideEditModal()),
    onCreate: (name, password) =>
      dispatch(
        devicesOperations.reqCreate({
          name,
          password
        })
      ),
    onEdit: (id, name, password) =>
      dispatch(
        devicesOperations.reqEdit({
          id,
          name,
          password
        })
      )
  };
};

const EditDeviceModal = withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditDeviceModalComponent)
);

export default EditDeviceModal;
