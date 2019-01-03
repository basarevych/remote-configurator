import { injectIntl } from "react-intl";
import { devicesSelectors, devicesOperations } from "../../state/devices";
import connectForm from "../../lib/connectForm";
import CredentialsModalComponent from "../../components/Modals/CredentialsModal";

const mapStateToProps = state => {
  return {
    isOpen: devicesSelectors.isCredentialsModalOpen(state),
    name: devicesSelectors.getName(state, {
      deviceId: devicesSelectors.getCredentialsModalDeviceId(state)
    }),
    data: devicesSelectors.getCredentialsModalData(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancel: () => dispatch(devicesOperations.cancelAuth()),
    onFinish: (username, password) =>
      dispatch(devicesOperations.finishAuth({ username, password }))
  };
};

const CredentialsModal = injectIntl(
  connectForm(CredentialsModalComponent, mapStateToProps, mapDispatchToProps)
);
export default CredentialsModal;
