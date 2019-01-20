import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { intlShape, FormattedMessage } from "react-intl";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import Tooltip from "@material-ui/core/Tooltip";
import OpenTerminalIcon from "@material-ui/icons/OpenInBrowser";
import OpenBrowserIcon from "@material-ui/icons/Language";
import DisconnectIcon from "@material-ui/icons/ExitToApp";

export const styles = () => ({
  checkboxRow: {
    whiteSpace: "nowrap"
  },
  checkboxField: {
    width: 1
  },
  checkbox: {
    padding: 0
  },
  tableButton: {
    marginLeft: "0.5rem"
  },
  progress: {
    display: "inline-block",
    width: 100,
    marginLeft: "0.5rem"
  },
  tooltip: {
    fontSize: "1rem"
  }
});

class DeviceItem extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    sshHost: PropTypes.string.isRequired,
    sshPort: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    node: PropTypes.object.isRequired,
    info: PropTypes.object,
    isSelected: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onTerminal: PropTypes.func.isRequired,
    onProxy: PropTypes.func.isRequired,
    onConnect: PropTypes.func.isRequired,
    onDisconnect: PropTypes.func.isRequired
  };

  render() {
    return (
      <TableRow>
        <TableCell
          padding="checkbox"
          className={classNames(
            this.props.classes.checkboxRow,
            this.props.isSelected && "selected"
          )}
          classes={{ root: this.props.classes.checkboxField }}
        >
          <Checkbox
            checked={this.props.isSelected}
            classes={{ root: this.props.classes.checkbox }}
            onChange={() => this.props.onToggle(this.props.node.id)}
            value="on"
          />
          {this.props.info && this.props.info.isLoggedIn ? (
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
                    classes={{
                      root: this.props.classes.tableButton
                    }}
                    onClick={() => this.props.onTerminal(this.props.node.id)}
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
                    classes={{
                      root: this.props.classes.tableButton
                    }}
                    onClick={() => this.props.onProxy(this.props.node.id)}
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
                    classes={{
                      root: this.props.classes.tableButton
                    }}
                    onClick={() => this.props.onDisconnect(this.props.node.id)}
                  >
                    <DisconnectIcon />
                  </IconButton>
                </span>
              </Tooltip>
            </React.Fragment>
          ) : this.props.info && this.props.info.isLoggingIn ? (
            <div className={this.props.classes.progress}>
              <LinearProgress />
            </div>
          ) : (
            <Button
              size="small"
              variant="contained"
              color="primary"
              disabled={!this.props.info}
              classes={{ root: this.props.classes.tableButton }}
              onClick={() => this.props.onConnect(this.props.node.id)}
            >
              <FormattedMessage id="DEVICES_CONNECT_BUTTON" />
            </Button>
          )}
        </TableCell>
        <TableCell
          className={classNames(this.props.isSelected && "selected")}
          component="th"
          scope="row"
        >
          {this.props.node.name}
        </TableCell>
        <TableCell className={classNames(this.props.isSelected && "selected")}>
          {this.props.info
            ? this.props.info.address
            : this.props.intl.formatMessage({
                id: "DEVICES_OFFLINE_LABEL"
              })}
        </TableCell>
        <TableCell className={classNames(this.props.isSelected && "selected")}>
          {`ssh -p ${this.props.sshPort} -R 22:localhost:22 -N ${this.props
            .login +
            "_" +
            this.props.node.name}@${this.props.sshHost}`}
          {!!(this.props.info && this.props.info.status) && (
            <span>
              <br />
              {this.props.info.status}
            </span>
          )}
        </TableCell>
      </TableRow>
    );
  }
}

export default DeviceItem;
