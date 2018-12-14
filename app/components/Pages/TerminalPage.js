import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Terminal from "../../containers/Ssh/Terminal";

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

class TerminalPage extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    terminalId: PropTypes.string,
    isAuthenticated: PropTypes.bool.isRequired
  };

  render() {
    if (!this.props.isAuthenticated) return null;

    return (
      <div className={this.props.classes.layout}>
        <Terminal terminalId={this.props.terminalId} />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TerminalPage);
