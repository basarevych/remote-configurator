import React from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import { List } from "immutable";
import { AutoSizer } from "react-virtualized";
import { FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import XTerm from "../../containers/Ssh/XTerm";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";
import cyan from "@material-ui/core/colors/cyan";
import green from "@material-ui/core/colors/green";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import styledScroll from "../../styles/styledScroll";

const styles = theme => ({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  header: {
    marginLeft: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  headerText: {
    flex: 1
  },
  placeholder: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  terminal: {
    flex: 1,
    padding: "1rem",
    borderRadius: theme.shape.borderRadius,
    "& .xterm .xterm-viewport": styledScroll(theme)
  }
});

class Terminal extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    terminalId: PropTypes.string,
    isConnecting: PropTypes.bool,
    isConnected: PropTypes.bool,
    name: PropTypes.string,
    address: PropTypes.string,
    status: PropTypes.string,
    history: PropTypes.instanceOf(List).isRequired,
    onInput: PropTypes.func.isRequired,
    onResize: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      status: props.status
    };

    this.lastRecordId = null;
    this.xterm = React.createRef();
    this.container = React.createRef();
    this.handleKey = this.handleKey.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};

    if (nextProps.status && prevState.status !== nextProps.status)
      state.status = nextProps.status;

    return _.keys(state).length ? state : null;
  }

  componentDidMount() {
    this.updateHistory();
  }

  componentDidUpdate() {
    this.updateHistory();
  }

  handleKey(data) {
    if (this.props.isConnected) this.props.onInput(data);
  }

  handlePaste(data) {
    if (this.props.isConnected) this.props.onInput(data);
  }

  handleResize(cols, rows, width, height) {
    if (this.props.isConnected && cols && rows)
      this.props.onResize(cols, rows, width, height);
  }

  handleClose() {
    this.props.onClose();
    Router.push("/");
  }

  updateHistory() {
    if (this.xterm.current && this.props.history.size) {
      const term = this.xterm.current.getTerminal();

      let newData = [];
      let found = false;
      // eslint-disable-next-line lodash/prefer-lodash-method
      this.props.history.forEach(item => {
        if (found) newData.push(item.get("data"));
        else if (item.get("recordId") === this.lastRecordId) found = true;
      });
      if (!found) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        newData = this.props.history.map(item => item.get("data")).toJS();
      }
      if (newData.length) {
        term.write(newData.join(""));
        this.lastRecordId = this.props.history.last().get("recordId");
      }
    }
  }

  renderPlaceholder() {
    return (
      <div className={this.props.classes.placeholder}>
        {this.state.status && <h3>{this.state.status}</h3>}
        {!this.state.status &&
          (this.props.isConnecting ? (
            <React.Fragment>
              <CircularProgress color="primary" size={60} />
              <Typography variant="h5" color="inherit">
                <FormattedMessage id="TERMINAL_CONNECTING_LABEL" />
              </Typography>
            </React.Fragment>
          ) : (
            <Typography variant="h5" color="inherit">
              <FormattedMessage id="TERMINAL_NOT_CONNECTED_LABEL" />
            </Typography>
          ))}
      </div>
    );
  }

  renderTerminal() {
    return (
      <div className={this.props.classes.terminal}>
        <AutoSizer>
          {({ width, height }) => (
            <XTerm
              ref={this.xterm}
              width={width}
              height={height}
              onKey={this.handleKey}
              onPaste={this.handlePaste}
              onResize={this.handleResize}
              options={{
                fontFamily: '"Roboto Mono", monospace',
                fontSize: 14,
                allowTransparency: true,
                theme: {
                  background: this.props.theme.sidebar.background,
                  foreground: grey[100],
                  cursor: grey[50],
                  cursorAccent: this.props.theme.sidebar.background,
                  //selection: theme._lightBlue50,
                  black: this.props.theme.sidebar.background,
                  blue: blue[400],
                  cyan: cyan[400],
                  green: green[400],
                  magenta: pink[400],
                  red: red[400],
                  yellow: yellow[400],
                  white: grey[100],
                  brightBlack: grey[700],
                  brightBlue: blue[100],
                  brightCyan: cyan[100],
                  brightGreen: green[100],
                  brightMagenta: pink[100],
                  brightRed: red[100],
                  brightYellow: yellow[100],
                  brightWhite: grey[50]
                }
              }}
            />
          )}
        </AutoSizer>
      </div>
    );
  }

  render() {
    return (
      <Paper className={this.props.classes.container}>
        <div className={this.props.classes.header}>
          <Typography variant="h5" className={this.props.classes.headerText}>
            {this.props.name}&nbsp;
            {!!this.props.address && "(" + this.props.address + ")"}
          </Typography>
          <IconButton color="inherit" onClick={this.handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        {this.props.isConnected
          ? this.renderTerminal()
          : this.renderPlaceholder()}
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Terminal);
