import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { usersOperations, usersSelectors } from "./state";
import EditUserModalComponent, { styles } from "./EditUserModal";

const mapStateToProps = state => {
  return {
    isOpen: usersSelectors.isEditModalOpen(state),
    currentId: usersSelectors.getEditModalUserId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancel: () => dispatch(usersOperations.hideEditModal()),
    onCreate: (login, password, isAdmin) =>
      dispatch(usersOperations.create({ login, password, isAdmin })),
    onEdit: (id, login, password, isAdmin) =>
      dispatch(
        usersOperations.edit({
          id,
          login,
          password,
          isAdmin
        })
      )
  };
};

const EditUserModal = withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditUserModalComponent)
);

export default EditUserModal;
