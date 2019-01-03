import { injectIntl } from "react-intl";
import { devicesSelectors, devicesOperations } from "../../state/devices";
import connectForm from "../../lib/connectForm";
import ProxyModalComponent from "../../components/Modals/ProxyModal";

const mapStateToProps = (state, props) => {
  return {
    name: devicesSelectors.getName(state, {
      deviceId: props.deviceId
    })
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFinish: (host, port, isAuthNeeded, username, password) =>
      dispatch(
        devicesOperations.openBrowser({
          deviceId: props.deviceId,
          host,
          port,
          isAuthNeeded,
          username,
          password
        })
      )
  };
};

const ProxyModal = injectIntl(
  connectForm(ProxyModalComponent, mapStateToProps, mapDispatchToProps)
);
export default ProxyModal;
