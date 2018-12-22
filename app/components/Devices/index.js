import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { List, Map } from "immutable";
import { FormattedMessage, intlShape } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import LinearProgress from "@material-ui/core/LinearProgress";
import Tooltip from "@material-ui/core/Tooltip";
import EditDeviceModal from "../../containers/Devices/EditDeviceModal";
import ConfirmModal from "../Modals/ConfirmModal";
import OpenTerminalIcon from "@material-ui/icons/OpenInBrowser";
import OpenBrowserIcon from "@material-ui/icons/Language";
import DisconnectIcon from "@material-ui/icons/ExitToApp";
import ProxyModal from "../../containers/Modals/ProxyModal";

const styles = theme => ({
  paper: {
    padding: "1rem"
  },
  statusColumn: {
    width: "40%"
  },
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
  tooltip: {
    fontSize: "1rem"
  },
  progress: {
    display: "inline-block",
    width: theme.main.spacing * 4
  },
  collapsing: {
    width: 1,
    whiteSpace: ["nowrap", "!important"]
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
    sshHost: PropTypes.string.isRequired,
    sshPort: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    devices: PropTypes.instanceOf(List).isRequired,
    online: PropTypes.instanceOf(Map).isRequired,
    isAllSelected: PropTypes.bool.isRequired,
    isAllDeselected: PropTypes.bool.isRequired,
    onLoad: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSetSelected: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    onDeselectAll: PropTypes.func.isRequired,
    onConnect: PropTypes.func.isRequired,
    onDisconnect: PropTypes.func.isRequired,
    onOpenTerminal: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isConfirmOpen: false,
      isProxyModalOpen: false,
      proxyModalDeviceId: null
    };

    this.handleCreateAction = this.handleCreateAction.bind(this);
    this.handleEditAction = this.handleEditAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.handleProxyModalOpen = this.handleProxyModalOpen.bind(this);
    this.handleProxyModalClose = this.handleProxyModalClose.bind(this);
  }

  handleToggleAll(forceOff = false) {
    if (forceOff || this.props.isAllSelected) this.props.onDeselectAll();
    else this.props.onSelectAll();
  }

  handleToggle(deviceId) {
    // eslint-disable-next-line lodash/prefer-lodash-method
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

  handleProxyModalOpen(deviceId) {
    this.setState({
      isProxyModalOpen: true,
      proxyModalDeviceId: deviceId
    });
  }

  handleProxyModalClose() {
    this.setState({
      isProxyModalOpen: false
    });
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

        <Paper className={this.props.classes.paper}>
          <Table padding="dense">
            <TableHead>
              <TableRow>
                <TableCell
                  padding="none"
                  classes={{ root: this.props.classes.collapsing }}
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
                <TableCell className={this.props.classes.statusColumn} />
              </TableRow>
            </TableHead>
            <TableBody>
              {/* eslint-disable-next-line lodash/prefer-lodash-method */}
              {this.props.devices.map((row, index) => {
                const info = this.props.online.get(row.get("id"));
                return (
                  <TableRow key={`row-${index}`}>
                    <TableCell
                      padding="none"
                      className={classNames(
                        index % 2 ? "even" : "odd",
                        row.get("isSelected") && "selected"
                      )}
                      classes={{ root: this.props.classes.collapsing }}
                    >
                      <Checkbox
                        checked={!!row.get("isSelected")}
                        classes={{ root: this.props.classes.checkbox }}
                        onChange={() => this.handleToggle(row.get("id"))}
                        value="on"
                      />
                      {info && info.get("isLoggedIn") ? (
                        <React.Fragment>
                          <Tooltip
                            disableFocusListener
                            classes={{ tooltip: this.props.classes.tooltip }}
                            title={this.props.intl.formatMessage({
                              id: "DEVICES_OPEN_TERMINAL_TIP"
                            })}
                          >
                            <span>
                              <IconButton
                                color="inherit"
                                onClick={() =>
                                  this.props.onOpenTerminal(row.get("id"))
                                }
                              >
                                <OpenTerminalIcon />
                              </IconButton>
                            </span>
                          </Tooltip>
                          <Tooltip
                            disableFocusListener
                            classes={{ tooltip: this.props.classes.tooltip }}
                            title={this.props.intl.formatMessage({
                              id: "DEVICES_OPEN_BROWSER_TIP"
                            })}
                          >
                            <span>
                              <IconButton
                                color="inherit"
                                onClick={() =>
                                  this.handleProxyModalOpen(row.get("id"))
                                }
                              >
                                <OpenBrowserIcon />
                              </IconButton>
                            </span>
                          </Tooltip>
                          <Tooltip
                            disableFocusListener
                            classes={{ tooltip: this.props.classes.tooltip }}
                            title={this.props.intl.formatMessage({
                              id: "DEVICES_DISCONNECT_TIP"
                            })}
                          >
                            <span>
                              <IconButton
                                color="inherit"
                                onClick={() =>
                                  this.props.onDisconnect(row.get("id"))
                                }
                              >
                                <DisconnectIcon />
                              </IconButton>
                            </span>
                          </Tooltip>
                        </React.Fragment>
                      ) : info && info.get("isLoggingIn") ? (
                        <LinearProgress
                          className={this.props.classes.progress}
                        />
                      ) : (
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          disabled={!info}
                          onClick={() => this.props.onConnect(row.get("id"))}
                        >
                          <FormattedMessage id="DEVICES_CONNECT_BUTTON" />
                        </Button>
                      )}
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
                    >
                      {info
                        ? info.get("address")
                        : this.props.intl.formatMessage({
                            id: "DEVICES_OFFLINE_LABEL"
                          })}
                    </TableCell>
                    <TableCell
                      className={classNames(
                        this.props.classes.statusColumn,
                        index % 2 ? "even" : "odd",
                        row.get("isSelected") && "selected"
                      )}
                    >
                      {info
                        ? info.get("status")
                        : `ssh -p ${
                            this.props.sshPort
                          } -R 22:localhost:22 -N ${this.props.login +
                            "_" +
                            row.get("name")}@${this.props.sshHost}`}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>

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
        <ProxyModal
          isOpen={this.state.isProxyModalOpen}
          deviceId={this.state.proxyModalDeviceId}
          onClose={this.handleProxyModalClose}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Devices);
