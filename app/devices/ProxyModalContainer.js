import { withStyles } from "@material-ui/core/styles";
import { injectIntl } from "react-intl";
import { devicesSelectors, devicesOperations } from "./state";
import connectForm from "../app/forms/connectForm";
import ProxyModalComponent, { styles } from "./ProxyModal";

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

const ProxyModal = withStyles(styles)(
  injectIntl(
    connectForm(ProxyModalComponent, mapStateToProps, mapDispatchToProps)
  )
);
export default ProxyModal;
