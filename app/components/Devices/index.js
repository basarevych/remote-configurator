import React from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import { FormattedMessage, intlShape } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import TerminalIcon from "@material-ui/icons/OpenInBrowser";

const styles = () => ({
  buttons: {
    marginBottom: "1rem"
  },
  collapsing: {
    width: 1,
    whiteSpace: "nowrap"
  }
});

class Devices extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    devices: PropTypes.instanceOf(List).isRequired,
    onOpenTerminal: PropTypes.func.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <div className={this.props.classes.buttons}>
          <Button color="secondary" variant="contained">
            <FormattedMessage id="DEVICES_ADD_BUTTON" />
          </Button>
        </div>
        <Table padding="dense">
          <TableHead>
            <TableRow>
              <TableCell>
                <FormattedMessage id="DEVICES_NAME_COLUMN" />
              </TableCell>
              <TableCell>
                <FormattedMessage id="DEVICES_ADDRESS_COLUMN" />
              </TableCell>
              <TableCell classes={{ root: this.props.classes.collapsing }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {/* eslint-disable-next-line lodash/prefer-lodash-method */}
            {this.props.devices.map((device, index) => {
              // eslint-disable-next-line lodash/prefer-lodash-method
              return (
                <React.Fragment key={`row-${index}`}>
                  <TableRow>
                    <TableCell>{device.get("name")}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          this.props.onOpenTerminal(device.get("id"))
                        }
                      >
                        <TerminalIcon />
                        <FormattedMessage id="DEVICES_CONNECT_BUTTON" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Devices);
