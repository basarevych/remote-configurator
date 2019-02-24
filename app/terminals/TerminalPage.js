import React from "react";
import PropTypes from "prop-types";
import Terminal from "./TerminalContainer";

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
    terminalId: PropTypes.string
  };

  static getInitialProps({ query }) {
    return { terminalId: query.terminalId };
  }

  render() {
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
