import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Browser from "../../containers/Ssh/Browser";

const styles = theme => ({
  layout: {
    width: "100%",
    maxWidth: 1300 + 2 * theme.main.spacing,
    flex: 1,
    display: "flex",
    padding: theme.main.spacing,
    [theme.breakpoints.down("md")]: {
      padding: theme.main.spacing / 2,
      maxWidth: 1300 + theme.main.spacing
    }
  }
});

class BrowserPage extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    deviceId: PropTypes.string,
    host: PropTypes.string,
    port: PropTypes.number
  };

  render() {
    if (!this.props.isAuthenticated) return null;

    return (
      <div className={this.props.classes.layout}>
        <Browser
          key={`browser-${this.props.deviceId}-${this.props.host}-${
            this.props.port
          }`}
          deviceId={this.props.deviceId}
          host={this.props.host}
          port={this.props.port}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(BrowserPage);
