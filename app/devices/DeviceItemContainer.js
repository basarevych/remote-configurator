import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { graphql, createFragmentContainer } from "react-relay";
import { appSelectors } from "../app/state";
import { authSelectors } from "../auth/state";
import { devicesSelectors, devicesOperations } from "./state";
import DeviceItemComponent, { styles } from "./DeviceItem";
import { fromGlobalId } from "graphql-relay";

const mapStateToProps = (state, props) => {
  return {
    sshHost: appSelectors.getSshHost(state),
    sshPort: appSelectors.getSshPort(state),
    login: authSelectors.getLogin(state) || "",
    isSelected: _.includes(devicesSelectors.getSelected(state), props.node.id),
    info: devicesSelectors.getDeviceInfo(state, {
      deviceId: fromGlobalId(props.node.id).id
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTerminal: deviceId =>
      dispatch(
        devicesOperations.openTerminal({ deviceId: fromGlobalId(deviceId).id })
      ),
    onConnect: deviceId =>
      dispatch(
        devicesOperations.startAuth({ deviceId: fromGlobalId(deviceId).id })
      ),
    onDisconnect: deviceId =>
      dispatch(
        devicesOperations.disconnect({ deviceId: fromGlobalId(deviceId).id })
      )
  };
};

const DeviceItem = createFragmentContainer(
  withStyles(styles)(
    injectIntl(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(DeviceItemComponent)
    )
  ),
  {
    node: graphql`
      fragment DeviceItemContainer_node on Device {
        id
        name
      }
    `
  }
);

export { styles };
export default DeviceItem;
