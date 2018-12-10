import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { devicesSelectors, devicesOperations } from "../../state/devices";
import DevicesComponent from "../../components/Devices";

const mapStateToProps = state => {
  return {
    devices: devicesSelectors.getList(state),
    isAllSelected: devicesSelectors.isAllSelected(state),
    isAllDeselected: devicesSelectors.isAllDeselected(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(devicesOperations.load()),
    onCreate: () => dispatch(devicesOperations.showEditModal()),
    onEdit: () => dispatch(devicesOperations.editFirstSelected()),
    onDelete: deviceId =>
      dispatch(devicesOperations.reqRemove({ id: deviceId })),
    onSetSelected: (deviceId, isSelected) =>
      dispatch(devicesOperations.setSelected({ deviceId, isSelected })),
    onSelectAll: () => dispatch(devicesOperations.selectAll()),
    onDeselectAll: () => dispatch(devicesOperations.deselectAll())
  };
};

const Devices = injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DevicesComponent)
);

export default Devices;
