import { connect } from "react-redux";
import { graphql, createRefetchContainer } from "react-relay";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { appOperations, appSelectors } from "../app/state";
import { devicesSelectors, devicesOperations } from "./state";
import DeviceListComponent, { pageSize, styles } from "./DeviceList";

const mapStateToProps = state => {
  return {
    selected: devicesSelectors.getSelected(state),
    proxyOrigin: appSelectors.getProxyOrigin(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetCookie: (name, value, days) =>
      dispatch(appOperations.setCookie({ name, value, days })),
    onGetCookie: name => dispatch(appOperations.getCookie({ name })),
    getToken: () => dispatch(appOperations.getToken()),
    onCreate: () => dispatch(devicesOperations.showEditModal()),
    onEdit: () => dispatch(devicesOperations.editFirstSelected()),
    onDelete: deviceId =>
      dispatch(devicesOperations.reqRemove({ id: deviceId })),
    onSetSelected: (deviceId, isSelected) =>
      dispatch(devicesOperations.setSelected({ deviceId, isSelected })),
    onSelectAll: deviceIds =>
      dispatch(devicesOperations.selectAll({ deviceIds })),
    onDeselectAll: exceptDeviceIds =>
      dispatch(devicesOperations.deselectAll({ exceptDeviceIds }))
  };
};

const DeviceList = createRefetchContainer(
  withStyles(styles)(
    injectIntl(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(DeviceListComponent)
    )
  ),
  {
    viewer: graphql`
      fragment DeviceListContainer_viewer on Viewer
        @argumentDefinitions(
          first: { type: "Int" }
          after: { type: "String" }
          last: { type: "Int" }
          before: { type: "String" }
        ) {
        devices(first: $first, after: $after, last: $last, before: $before) {
          edges {
            cursor
            node {
              id
              ...DeviceItemContainer_node
            }
          }
          totalCount
        }
      }
    `
  },
  graphql`
    query DeviceListContainerQuery(
      $first: Int
      $after: String
      $last: Int
      $before: String
    ) {
      viewer {
        ...DeviceListContainer_viewer
          @arguments(first: $first, after: $after, last: $last, before: $before)
      }
    }
  `
);

export { pageSize };
export default DeviceList;
