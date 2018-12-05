import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { devicesSelectors } from "../../state/devices";
import { terminalsOperations, terminalsSelectors } from "../../state/terminals";
import DevicesComponent from "../../components/Devices";

const mapStateToProps = state => {
  return {
    devices: devicesSelectors.getList(state),
    terminals: terminalsSelectors.getTerminalsMap(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpenTerminal: deviceId =>
      dispatch(terminalsOperations.startSetupAuth({ deviceId })),
    onCloseTerminal: terminalId =>
      dispatch(terminalsOperations.kill({ terminalId }))
  };
};

const Devices = injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DevicesComponent)
);

export default Devices;
