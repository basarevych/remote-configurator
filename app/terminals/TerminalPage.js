import React from "react";
import PropTypes from "prop-types";
import Terminal from "./TerminalContainer";
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

class TerminalPage extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    terminalId: PropTypes.string,
    userRoles: PropTypes.array.isRequired
  };

  static getInitialProps({ query }) {
    return { terminalId: query.terminalId };
  }

  render() {
    if (!isRouteAllowed("/terminal", this.props.userRoles)) return null;

    return (
      <div className={this.props.classes.layout}>
        <Terminal
          key={`terminal-${this.props.terminalId}`}
          terminalId={this.props.terminalId}
        />
      </div>
    );
  }
}

export default TerminalPage;
