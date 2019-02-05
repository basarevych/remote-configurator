import React from "react";
import PropTypes from "prop-types";
import Browser from "./BrowserContainer";
import isRouteAllowed from "../../common/isRouteAllowed";

export const styles = theme => ({
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
    classes: PropTypes.object.isRequired,
    userRoles: PropTypes.array.isRequired,
    deviceId: PropTypes.string,
    host: PropTypes.string,
    port: PropTypes.number
  };

  static getInitialProps({ query }) {
    return {
      deviceId: query.deviceId,
      host: query.host,
      port: parseInt(query.port) || 0
    };
  }

  render() {
    if (!isRouteAllowed("/browser", this.props.userRoles)) return null;

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

export default BrowserPage;
