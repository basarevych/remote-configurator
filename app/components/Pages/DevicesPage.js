import React from "react";
import PropTypes from "prop-types";
import { URL } from "universal-url";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Devices from "../../containers/Devices";

const styles = theme => ({
  docs: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    background: fade(theme.palette.primary.main, 0.4),
    "& ul": {
      marginBottom: 0
    },
    "& li": {
      marginTop: "1rem"
    }
  },
  docsLayout: {
    width: "100%",
    maxWidth: 1300 + 2 * theme.main.spacing,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "stretch",
    alignItems: "stretch",
    padding: theme.main.spacing,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: theme.main.spacing / 2,
      maxWidth: 1300 + theme.main.spacing
    }
  },
  docFirst: {
    flex: 1
  },
  docSeparator: {
    width: 30,
    height: 30
  },
  docSecond: {
    flex: 1
  },
  layout: {
    width: "100%",
    maxWidth: 1300 + 2 * theme.main.spacing,
    flex: 1,
    padding: theme.main.spacing,
    [theme.breakpoints.down("md")]: {
      padding: theme.main.spacing / 2,
      maxWidth: 1300 + theme.main.spacing
    }
  }
});

class DevicesPage extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    proxyOrigin: PropTypes.string.isRequired
  };

  render() {
    if (!this.props.isAuthenticated) return null;

    return (
      <React.Fragment>
        <div className={this.props.classes.docs}>
          <div className={this.props.classes.docsLayout}>
            <div className={this.props.classes.docFirst}>
              <Typography variant="h5">
                <FormattedMessage id="DEVICES_PAGE_WORKFLOW_TITLE" />
              </Typography>
              <FormattedHTMLMessage id="DEVICES_PAGE_WORKFLOW_HTML" />
            </div>
            <div className={this.props.classes.docSeparator} />
            <div className={this.props.classes.docSecond}>
              <Typography variant="h5">
                <FormattedMessage id="DEVICES_PAGE_SECURITY_TITLE" />
              </Typography>
              <FormattedHTMLMessage
                id="DEVICES_PAGE_SECURITY_HTML"
                values={{ origin: new URL(this.props.proxyOrigin).hostname }}
              />
            </div>
          </div>
        </div>

        <div className={this.props.classes.layout}>
          <Grid container spacing={this.props.theme.main.spacing}>
            <Grid item xs={12}>
              <Devices />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DevicesPage);
