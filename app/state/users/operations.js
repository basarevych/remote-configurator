import * as actions from "./actions";
import { appOperations } from "../app";
import constants from "../../../common/constants";

export const showEditModal = actions.showEditModal;
export const hideEditModal = actions.hideEditModal;

export const load = ({ req } = {}) => async dispatch => {
  let users;
  if (req) {
    users = _.map(await req.di.get("repository.users").getUsers(req), user =>
      _.assign({}, user, {
        whenCreated: user.whenCreated.valueOf(),
        whenUpdated: user.whenUpdated.valueOf()
      })
    );
  } else {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          query {
            users {
              id
              login
              roles
            }
          }
        `
      )
    );
    users = response && _.get(response, "data.users");
  }
  await dispatch(actions.setList({ list: users }));
};

export const create = ({
  login,
  password,
  isAdmin,
  isCallCenter
}) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($login: String, $password: String, $roles: [UserRole]) {
            createUser(login: $login, password: $password, roles: $roles) {
              success
            }
          }
        `,
        {
          login,
          password,
          roles: _.compact([
            isAdmin && constants.roles.ADMIN,
            isCallCenter && constants.roles.CALL_CENTER
          ])
        }
      )
    );

    if (response && _.get(response, "data.createUser.success", false)) {
      await dispatch(actions.hideEditModal());
      return true;
    } else {
      let error = response && _.get(response, "errors.0", null);
      if (error && error.code === "E_VALIDATION") result = error.details;
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const edit = ({
  id,
  login,
  password,
  isAdmin,
  isCallCenter
}) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($id: String, $login: String, $password: String, $roles: [UserRole]) {
            editUser(id: $id, login: $login, password: $password, roles: $roles) {
              success
            }
          }
        `,
        {
          id,
          login,
          password,
          roles: _.compact([
            isAdmin && constants.roles.ADMIN,
            isCallCenter && constants.roles.CALL_CENTER
          ])
        }
      )
    );

    if (response && _.get(response, "data.editUser.success", false)) {
      await dispatch(actions.hideEditModal());
      return true;
    } else {
      let error = response && _.get(response, "errors.0", null);
      if (error && error.code === "E_VALIDATION") result = error.details;
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const remove = ({ id }) => async dispatch => {
  let response = await dispatch(
    appOperations.gqlQuery(
      `
        mutation ($id: String) {
          deleteUser(id: $id) {
            success
          }
        }
      `,
      {
        id
      }
    )
  );
  let success =
    (response && _.get(response, "data.deleteUser.success")) || false;
  return success;
};
