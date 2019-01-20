import React from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import CloseIcon from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export const styles = () => ({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    background: "#2a2c38"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  headerText: {
    flex: 1
  },
  browser: {
    flex: 1
  }
});

class Browser extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    appOrigin: PropTypes.string.isRequired,
    deviceId: PropTypes.string,
    host: PropTypes.string,
    port: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      key: Date.now()
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  getIframeId() {
    return `frame-${this.props.deviceId}-${this.props.host}-${this.props.port}`;
  }

  handleRefresh() {
    this.setState({ key: Date.now() });
  }

  handleClose() {
    Router.push("/");
  }

  render() {
    return (
      <Paper className={this.props.classes.container}>
        <div className={this.props.classes.header}>
          <IconButton color="inherit" onClick={this.handleRefresh}>
            <RefreshIcon />
          </IconButton>
          <Typography variant="h5" className={this.props.classes.headerText}>
            {this.props.host}:{this.props.port}&nbsp;-&nbsp;{this.props.name}
            &nbsp;
            {!!this.props.address && "(" + this.props.address + ")"}
          </Typography>
          <IconButton color="inherit" onClick={this.handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={this.props.classes.browser}>
          <AutoSizer>
            {({ width, height }) => (
              <iframe
                key={`frame-${this.state.key}`}
                id={this.getIframeId()}
                width={width}
                height={height}
                sandbox="allow-forms allow-modals allow-popups allow-scripts allow-same-origin"
                style={{ background: "#ffffff", border: "none" }}
                src={`${this.props.appOrigin}/api/browser/${
                  this.props.deviceId
                }/${this.props.host}/${this.props.port}`}
              />
            )}
          </AutoSizer>
        </div>
      </Paper>
    );
  }
}

export default Browser;
