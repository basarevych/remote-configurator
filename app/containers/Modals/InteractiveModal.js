import { injectIntl } from "react-intl";
import { devicesSelectors, devicesOperations } from "../../state/devices";
import connectForm from "../../lib/connectForm";
import InteractiveModalComponent from "../../components/Modals/InteractiveModal";

const mapStateToProps = state => {
  return {
    isOpen: devicesSelectors.isInteractiveModalOpen(state),
    name: devicesSelectors.getName(state, {
      deviceId: devicesSelectors.getInteractiveModalDeviceId(state)
    }),
    data: devicesSelectors.getInteractiveModalData(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancel: () => dispatch(devicesOperations.doInteractiveAuth()),
    onFinish: reply => dispatch(devicesOperations.doInteractiveAuth({ reply }))
  };
};

const InteractiveModal = injectIntl(
  connectForm(InteractiveModalComponent, mapStateToProps, mapDispatchToProps)
);
export default InteractiveModal;
