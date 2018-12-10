import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { List } from "immutable";
import { FormattedMessage, intlShape } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import EditDeviceModal from "../../containers/Devices/EditDeviceModal";
import ConfirmModal from "../Modals/ConfirmModal";

const styles = () => ({
  buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "stretch"
  },
  button: {
    margin: "0.5rem"
  },
  checkboxField: {
    width: 1
  },
  checkbox: {
    padding: "0.5rem 1rem"
  }
});

class Devices extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    devices: PropTypes.instanceOf(List).isRequired,
    isAllSelected: PropTypes.bool.isRequired,
    isAllDeselected: PropTypes.bool.isRequired,
    onLoad: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSetSelected: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    onDeselectAll: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isConfirmOpen: false
    };

    this.handleCreateAction = this.handleCreateAction.bind(this);
    this.handleEditAction = this.handleEditAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
  }

  handleToggleAll(forceOff = false) {
    if (forceOff || this.props.isAllSelected) this.props.onDeselectAll();
    else this.props.onSelectAll();
  }

  handleToggle(deviceId) {
    let device = this.props.devices.find(
      device => device.get("id") === deviceId
    );
    let isSelected = device && device.get("isSelected");
    this.props.onSetSelected(deviceId, !isSelected);
  }

  handleCreateAction() {
    this.props.onCreate();
  }

  handleEditAction() {
    this.props.onEdit();
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
      // eslint-disable-next-line lodash/prefer-lodash-method
      this.props.devices
        .filter(device => device.get("isSelected"))
        .map(device => this.props.onDelete(device.get("id")))
    );
    this.props.onLoad();
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.props.classes.buttons}>
          <Button
            variant="contained"
            color="secondary"
            classes={{ root: this.props.classes.button }}
            onClick={this.handleCreateAction}
          >
            <FormattedMessage id="DEVICES_CREATE_BUTTON" />
          </Button>
        </div>

        <Table padding="dense">
          <TableHead>
            <TableRow>
              <TableCell
                padding="none"
                classes={{ root: this.props.classes.checkboxField }}
              >
                <Checkbox
                  checked={
                    !!this.props.devices.size && this.props.isAllSelected
                  }
                  classes={{ root: this.props.classes.checkbox }}
                  indeterminate={
                    !this.props.isAllSelected && !this.props.isAllDeselected
                  }
                  onChange={() => this.handleToggleAll()}
                  value="on"
                />
              </TableCell>
              <TableCell>
                <FormattedMessage id="DEVICES_NAME_COLUMN" />
              </TableCell>
              <TableCell>
                <FormattedMessage id="DEVICES_ADDRESS_COLUMN" />
              </TableCell>
              <TableCell>
                <FormattedMessage id="DEVICES_CONN_STRING_COLUMN" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* eslint-disable-next-line lodash/prefer-lodash-method */}
            {this.props.devices.map((row, index) => (
              <TableRow key={`row-${index}`}>
                <TableCell
                  padding="none"
                  className={classNames(
                    index % 2 ? "even" : "odd",
                    row.get("isSelected") && "selected"
                  )}
                  classes={{ root: this.props.classes.checkboxField }}
                >
                  <Checkbox
                    checked={!!row.get("isSelected")}
                    classes={{ root: this.props.classes.checkbox }}
                    onChange={() => this.handleToggle(row.get("id"))}
                    value="on"
                  />
                </TableCell>
                <TableCell
                  className={classNames(
                    index % 2 ? "even" : "odd",
                    row.get("isSelected") && "selected"
                  )}
                  component="th"
                  scope="row"
                >
                  {row.get("name")}
                </TableCell>
                <TableCell
                  className={classNames(
                    index % 2 ? "even" : "odd",
                    row.get("isSelected") && "selected"
                  )}
                />
                <TableCell
                  className={classNames(
                    index % 2 ? "even" : "odd",
                    row.get("isSelected") && "selected"
                  )}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className={this.props.classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            disabled={this.props.isAllDeselected}
            classes={{ root: this.props.classes.button }}
            onClick={this.handleEditAction}
          >
            <FormattedMessage id="DEVICES_EDIT_BUTTON" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={this.props.isAllDeselected}
            classes={{ root: this.props.classes.button }}
            onClick={this.handleDeleteAction}
          >
            <FormattedMessage id="DEVICES_DELETE_BUTTON" />
          </Button>
        </div>

        <EditDeviceModal />
        <ConfirmModal
          isOpen={this.state.isConfirmOpen}
          title="DELETE_DEVICE_TITLE"
          text="DELETE_DEVICE_TEXT"
          cancel="DELETE_DEVICE_CANCEL"
          submit="DELETE_DEVICE_SUBMIT"
          onCancel={this.handleCancelDelete}
          onSubmit={this.handleConfirmDelete}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Devices);
