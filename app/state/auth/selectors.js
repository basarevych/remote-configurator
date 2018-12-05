import { createSelector } from "reselect";
import constants from "../../../common/constants";

export const getCsrf = state => state.getIn(["auth", "csrf"]);

export const isAuthenticated = state =>
  state.getIn(["auth", "isAuthenticated"]);

/* eslint-disable lodash/prefer-lodash-method */
export const isAdmin = state =>
  state.getIn(["auth", "roles"]).includes(constants.roles.ADMIN);
/* eslint-enable */

export const getLogin = state => state.getIn(["auth", "login"]);

export const getRoles = createSelector(
  state => state.getIn(["auth", "roles"]),
  roles => roles.toJS()
);
