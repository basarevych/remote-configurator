import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Map, List } from "immutable";
import { FormattedMessage, intlShape } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import MoreIcon from "@material-ui/icons/KeyboardArrowDown";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import EditUserModal from "../../containers/Users/EditUserModal";
import ConfirmModal from "../Modals/ConfirmModal";

const styles = () => ({
  checkbox: {
    padding: "0.5rem"
  },
  button: {
    margin: "0.5rem"
  },
  collapsing: {
    width: 1
  }
});

class Users extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    users: PropTypes.instanceOf(List).isRequired,
    onLoad: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      checkboxes: Map({}),
      isConfirmOpen: false
    };

    this.handleEditAction = this.handleEditAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.handleCreateAction = this.handleCreateAction.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.hash === nextProps.users.hashCode()) return null;

    let checkboxes = Map({});
    for (let item of nextProps.users.values()) {
      checkboxes = checkboxes.set(
        item.get("id"),
        prevState.checkboxes.has(item.get("id"))
          ? prevState.checkboxes.get(item.get("id"))
          : false
      );
    }

    return {
      hash: nextProps.users.hashCode(),
      checkboxes
    };
  }

  getNumSelected() {
    return this.state.checkboxes // eslint-disable-line lodash/prefer-lodash-method
      .toList()
      .filter(item => item === true).size;
  }

  handleToggleAll(forceOff = false) {
    if (forceOff || this.state.checkboxes.size === this.getNumSelected()) {
      this.setState({
        checkboxes: this.state.checkboxes.map(_.constant(false)) // eslint-disable-line lodash/prefer-lodash-method
      });
    } else {
      this.setState({
        checkboxes: this.state.checkboxes.map(_.constant(true)) // eslint-disable-line lodash/prefer-lodash-method
      });
    }
  }

  handleToggle(id, isChecked) {
    this.setState({ checkboxes: this.state.checkboxes.set(id, isChecked) });
  }

  handleEditAction() {
    this.props.onEdit(this.state.checkboxes.findKey(item => !!item));
  }

  handleDeleteAction() {
    this.setState({ isConfirmOpen: true });
  }

  handleCancelDelete() {
    this.setState({ isConfirmOpen: false });
  }

  async handleConfirmDelete() {
    this.setState({ isConfirmOpen: false });
    await Promise.all(
      _.compact(
        // eslint-disable-next-line lodash/prefer-lodash-method
        this.state.checkboxes.map((item, id) => item && this.props.onDelete(id))
      )
    );
    this.props.onLoad();
  }

  handleCreateAction() {
    this.props.onCreate();
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Button
            variant="contained"
            color="secondary"
            classes={{ root: this.props.classes.button }}
            onClick={this.handleCreateAction}
          >
            <FormattedMessage id="USERS_CREATE_BUTTON" />
          </Button>
        </div>

        <Table padding="dense">
          <TableHead>
            <TableRow>
              <TableCell
                padding="none"
                classes={{ root: this.props.classes.collapsing }}
              >
                <Checkbox
                  classes={{ root: this.props.classes.checkbox }}
                  checked={
                    !!this.state.checkboxes.size &&
                    this.state.checkboxes.size === this.getNumSelected()
                  }
                  indeterminate={
                    !!this.getNumSelected() &&
                    this.state.checkboxes.size !== this.getNumSelected()
                  }
                  onChange={() => this.handleToggleAll()}
                  value="on"
                />
              </TableCell>
              <TableCell>
                <FormattedMessage id="USERS_LOGIN_COLUMN" />
              </TableCell>
              <TableCell>
                <FormattedMessage id="USERS_ROLES_COLUMN" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* eslint-disable-next-line lodash/prefer-lodash-method */}
            {this.props.users.map((row, index) => (
              <TableRow key={`row-${index}`}>
                <TableCell
                  padding="none"
                  className={classNames(
                    index % 2 ? "even" : "odd",
                    this.state.checkboxes.get(row.get("id")) && "selected"
                  )}
                  classes={{ root: this.props.classes.collapsing }}
                >
                  <Checkbox
                    classes={{ root: this.props.classes.checkbox }}
                    checked={!!this.state.checkboxes.get(row.get("id"))}
                    onChange={event =>
                      this.handleToggle(row.get("id"), event.target.checked)
                    }
                    value="on"
                  />
                </TableCell>
                <TableCell
                  className={classNames(
                    index % 2 ? "even" : "odd",
                    this.state.checkboxes.get(row.get("id")) && "selected"
                  )}
                  component="th"
                  scope="row"
                >
                  {row.get("login")}
                </TableCell>
                <TableCell
                  className={classNames(
                    index % 2 ? "even" : "odd",
                    this.state.checkboxes.get(row.get("id")) && "selected"
                  )}
                >
                  {/* eslint-disable-next-line lodash/prefer-lodash-method */}
                  {row
                    .get("roles")
                    .toJS()
                    .map(item =>
                      this.props.intl.formatMessage({
                        id: `EDIT_USER_${item}_LABEL`
                      })
                    )
                    .join(", ")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div>
          <Button
            variant="contained"
            color="primary"
            disabled={!this.getNumSelected()}
            classes={{ root: this.props.classes.button }}
            onClick={this.handleEditAction}
          >
            <FormattedMessage id="USERS_EDIT_BUTTON" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={!this.getNumSelected()}
            classes={{ root: this.props.classes.button }}
            onClick={this.handleDeleteAction}
          >
            <FormattedMessage id="USERS_DELETE_BUTTON" />
          </Button>
        </div>

        <EditUserModal />
        <ConfirmModal
          isOpen={this.state.isConfirmOpen}
          title="DELETE_USER_TITLE"
          text="DELETE_USER_TEXT"
          cancel="DELETE_USER_CANCEL"
          submit="DELETE_USER_SUBMIT"
          onCancel={this.handleCancelDelete}
          onSubmit={this.handleConfirmDelete}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Users);
