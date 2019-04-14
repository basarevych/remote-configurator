import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import { graphql } from "react-relay";
import { fromGlobalId } from "graphql-relay";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import RefreshIcon from "@material-ui/icons/Refresh";
import CloseIcon from "@material-ui/icons/Close";
import responsiveTable from "../app/styles/responsiveTable";
import DeviceItem, { styles as itemStyles } from "./DeviceItemContainer";
import EditDeviceModal from "./EditDeviceModalContainer";
import ProxyModal from "./ProxyModalContainer";
import ConfirmModal from "../app/modals/ConfirmModalContainer";
import { RelayContext, subscribe } from "../app/providers/Relay";

export const pageSize = 10;

export const styles = theme => ({
  docs: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: fade(theme.palette.primary.main, 0.5),
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
    flex: 1,
    padding: theme.main.spacing
  },
  buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "stretch"
  },
  button: {
    margin: "0.5rem"
  },
  paper: {
    background: theme.main.paper
  },
  table: {
    [theme.breakpoints.down("sm")]: responsiveTable(theme)
  },
  statusColumn: {
    width: "40%"
  },
  grow: {
    flex: 1
  },
  ...itemStyles(theme)
});

const subscription = graphql`
  subscription DeviceListSubscription($token: String) {
    deviceEvent(token: $token) {
      id
    }
  }
`;

class DeviceList extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired,
    selected: PropTypes.array.isRequired,
    proxyOrigin: PropTypes.string.isRequired,
    getToken: PropTypes.func.isRequired,
    onGetCookie: PropTypes.func.isRequired,
    onSetCookie: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSetSelected: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    onDeselectAll: PropTypes.func.isRequired
  };

  static contextType = RelayContext;

  static introDismissedKey = "devicesIntroDismissed";

  constructor(props) {
    super(props);

    this.state = {
      pageSize,
      pageNumber: 0,
      variables: {
        first: pageSize
      },
      isConfirmOpen: false,
      isProxyModalOpen: false,
      proxyModalDeviceId: null,
      isIntroDismissed: true
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleCreateAction = this.handleCreateAction.bind(this);
    this.handleEditAction = this.handleEditAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.handleRefreshAction = this.handleRefreshAction.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.handleTextClose = this.handleTextClose.bind(this);
    this.handleProxyModalOpen = this.handleProxyModalOpen.bind(this);
    this.handleProxyModalClose = this.handleProxyModalClose.bind(this);
  }

  async componentDidMount() {
    this.unsubscribe = subscribe({
      subscription,
      getToken: this.props.getToken,
      environment: this.context,
      callback: this.handleRefreshAction
    });
    this.setState({
      isIntroDismissed:
        (await this.props.onGetCookie(DeviceList.introDismissedKey)) || false
    });
  }

  componentDidUpdate() {
    const total = _.get(this.props.viewer, "devices.totalCount", 0);
    if (total && this.state.pageNumber * this.state.pageSize >= total) {
      // we fell off the list - reset to the beginning
      let variables = {
        first: this.state.pageSize
      };
      setTimeout(() => {
        this.setState({ pageNumber: 0, variables }, () =>
          this.props.relay.refetch(variables, null, null, { force: true })
        );
      });
    }
    this.props.onDeselectAll(
      _.map(_.get(this.props.viewer, "devices.edges", []), "node.id")
    );
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }

  hasRecords() {
    return _.get(this.props.viewer, "devices.edges", []).length > 0;
  }

  isAllSelected() {
    const list = _.map(
      _.get(this.props.viewer, "devices.edges", []),
      "node.id"
    );
    return _.difference(list, this.props.selected).length === 0;
  }

  isAllDeselected() {
    return this.props.selected.length === 0;
  }

  isSelected(deviceId) {
    return _.includes(this.props.selected, deviceId);
  }

  handleToggleAll(forceOff = false) {
    if (forceOff || this.isAllSelected()) {
      this.props.onDeselectAll();
    } else {
      this.props.onSelectAll(
        _.map(_.get(this.props.viewer, "devices.edges", []), "node.id")
      );
    }
  }

  handleToggle(deviceId) {
    this.props.onSetSelected(deviceId, !this.isSelected(deviceId));
  }

  async handleCreateAction() {
    await this.props.onCreate();
  }

  async handleEditAction() {
    await this.props.onEdit();
  }

  handleDeleteAction() {
    this.setState({ isConfirmOpen: true });
  }

  handleCancelDelete() {
    this.setState({ isConfirmOpen: false });
  }

  async handleConfirmDelete() {
    this.setState({ isConfirmOpen: false });
    await Promise.all(
      _.map(this.props.selected, deviceId => this.props.onDelete(deviceId))
    );
  }

  handleRefreshAction() {
    this.props.relay.refetch(this.state.variables, null, null, { force: true });
  }

  handleChangeRowsPerPage(evt) {
    const pageSize = evt.target.value;
    let variables = {
      first: pageSize
    };
    this.setState({ pageSize, pageNumber: 0, variables }, () =>
      this.props.relay.refetch(variables, null, null, { force: true })
    );
  }

  handleChangePage(evt, pageNumber) {
    if (this.state.pageNumber === pageNumber) return;

    let variables = {};

    if (pageNumber === 0) {
      variables.first = this.state.pageSize;
    } else if (pageNumber > this.state.pageNumber) {
      if (
        pageNumber + 1 >
        Math.ceil(
          _.get(this.props.viewer, "devices.totalCount", 0) /
            this.state.pageSize
        )
      ) {
        return;
      }
      variables.first = this.state.pageSize;
      variables.after = _.get(
        this.props.viewer,
        "devices.pageInfo.endCursor",
        null
      );
    } else {
      if (this.state.pageNumber <= 0) return;
      variables.last = this.state.pageSize;
      variables.before = _.get(
        this.props.viewer,
        "devices.pageInfo.startCursor",
        null
      );
    }

    this.setState({ pageNumber, variables }, () =>
      this.props.relay.refetch(variables, null, null, { force: true })
    );
  }

  handleTextClose() {
    this.setState({ isIntroDismissed: true });
    this.props.onSetCookie(DeviceList.introDismissedKey, true);
  }

  handleProxyModalOpen(deviceId) {
    this.setState({
      isProxyModalOpen: true,
      proxyModalDeviceId: fromGlobalId(deviceId).id
    });
  }

  handleProxyModalClose() {
    this.setState({
      isProxyModalOpen: false
    });
  }

  renderTable() {
    return (
      <Paper className={this.props.classes.paper}>
        <Toolbar>
          <Typography variant="h6">
            <FormattedMessage id="TITLE_DEVICES" />
          </Typography>
          <div className={this.props.classes.grow} />
          <IconButton color="inherit" onClick={this.handleRefreshAction}>
            <RefreshIcon />
          </IconButton>
        </Toolbar>
        <Table padding="dense" className={this.props.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell
                padding="checkbox"
                classes={{ root: this.props.classes.checkboxField }}
              >
                <Checkbox
                  checked={!!this.hasRecords() && this.isAllSelected()}
                  classes={{ root: this.props.classes.checkbox }}
                  indeterminate={
                    !this.isAllSelected() && !this.isAllDeselected()
                  }
                  onChange={() => this.handleToggleAll()}
                  value="on"
                />
              </TableCell>
              <TableCell>
                <FormattedMessage id="DEVICES_NAME_COLUMN" />
              </TableCell>
              <TableCell>
                <FormattedMessage id="DEVICES_ADDRESS_COLUMN" />
              </TableCell>
              <TableCell className={this.props.classes.statusColumn} />
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(this.props.viewer.devices.edges, edge => (
              <DeviceItem
                key={edge.cursor}
                node={edge.node}
                onToggle={this.handleToggle}
                onProxy={this.handleProxyModalOpen}
              />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30, 50, 100]}
          component="div"
          count={_.get(this.props.viewer, "devices.totalCount", 0)}
          rowsPerPage={this.state.pageSize}
          page={this.state.pageNumber}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          onChangePage={this.handleChangePage}
        />
      </Paper>
    );
  }

  render() {
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
          <div className={this.props.classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              classes={{ root: this.props.classes.button }}
              onClick={this.handleCreateAction}
            >
              <FormattedMessage id="DEVICES_CREATE_BUTTON" />
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={this.props.selected.length === 0}
              classes={{ root: this.props.classes.button }}
              onClick={this.handleEditAction}
            >
              <FormattedMessage id="DEVICES_EDIT_BUTTON" />
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={this.props.selected.length === 0}
              classes={{ root: this.props.classes.button }}
              onClick={this.handleDeleteAction}
            >
              <FormattedMessage id="DEVICES_DELETE_BUTTON" />
            </Button>
          </div>

          {this.renderTable()}

          <EditDeviceModal />

          <ConfirmModal
            isOpen={this.state.isConfirmOpen}
            title="DELETE_DEVICE_TITLE"
            text="DELETE_DEVICE_TEXT"
            cancel="DELETE_DEVICE_CANCEL"
            submit="DELETE_DEVICE_SUBMIT"
            onCancel={this.handleCancelDelete}
            onSubmit={this.handleConfirmDelete}
          />

          <ProxyModal
            isOpen={this.state.isProxyModalOpen}
            deviceId={this.state.proxyModalDeviceId}
            onCancel={this.handleProxyModalClose}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DeviceList;
