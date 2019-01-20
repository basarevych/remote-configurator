import * as actions from "./actions";
import * as selectors from "./selectors";
import constants from "../../../common/constants";
import { getFormErrors } from "../../app/forms/connectForm";
import CreateUserMutation from "../mutations/CreateUser";
import EditUserMutation from "../mutations/EditUser";
import DeleteUserMutation from "../mutations/DeleteUser";

export const showEditModal = actions.showEditModal;
export const hideEditModal = actions.hideEditModal;
export const setSelected = actions.setSelected;
export const selectAll = actions.selectAll;
export const deselectAll = actions.deselectAll;

export const editFirstSelected = () => async (dispatch, getState) => {
  let selected = selectors.getSelected(getState());
  if (selected.length)
    return dispatch(actions.showEditModal({ userId: selected[0] }));
};

export const create = ({ login, password, isAdmin }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await CreateUserMutation(di, {
    login,
    password,
    roles: _.compact([isAdmin && constants.roles.ADMIN])
  });
  if (_.get(data, "data.createUser.userEdge.node.id", null)) {
    await dispatch(actions.hideEditModal());
    return true;
  }

  return getFormErrors(data);
};

export const edit = ({ id, login, password, isAdmin }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await EditUserMutation(di, {
    id,
    login,
    password,
    roles: _.compact([isAdmin && constants.roles.ADMIN])
  });
  if (_.get(data, "data.editUser.userEdge.node.id", null)) {
    await dispatch(actions.hideEditModal());
    return true;
  }

  return getFormErrors(data);
};

export const remove = ({ id }) => async (dispatch, getState, di) => {
  let data = await DeleteUserMutation(di, { id });
  return !!_.get(data, "data.deleteUser.userEdge.node.id", null);
};
