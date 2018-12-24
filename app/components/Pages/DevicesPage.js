import React from "react";
import PropTypes from "prop-types";
import { URL } from "universal-url";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Devices from "../../containers/Devices";

const styles = theme => ({
  docs: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: fade(theme.palette.primary.main, 0.4),
    "& ul": {
      marginBottom: 0
    },
    "& li": {
      marginTop: "1rem"
    }
  },
  docsLayout: {
    position: "relative",
    width: "100%",
    maxWidth: 1300 + 2 * theme.main.spacing,
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
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0
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
    storage: PropTypes.object.isRequired,
    proxyOrigin: PropTypes.string.isRequired
  };

  static introDismissedKey = "devicesIntroDismissed";

  constructor(props) {
    super(props);

    this.state = {
      isIntroDismissed: true
    };

    this.handleTextClose = this.handleTextClose.bind(this);
  }

  componentDidMount() {
    this.setState({
      isIntroDismissed:
        this.props.storage.get(DevicesPage.introDismissedKey) || false
    });
  }

  handleTextClose() {
    this.setState({ isIntroDismissed: true });
    this.props.storage.set(DevicesPage.introDismissedKey, true);
  }

  render() {
    if (!this.props.isAuthenticated) return null;

    return (
      <React.Fragment>
        {!this.state.isIntroDismissed && (
          <div className={this.props.classes.docs}>
            <div className={this.props.classes.docsLayout}>
              <IconButton
                color="inherit"
                className={this.props.classes.closeButton}
                onClick={this.handleTextClose}
              >
                <CloseIcon />
              </IconButton>{" "}
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
        )}

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
