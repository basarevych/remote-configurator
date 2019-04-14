import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { injectIntl } from "react-intl";
import { devicesSelectors, devicesOperations } from "./state";
import CredentialsModalComponent, { styles } from "./CredentialsModal";

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

const CredentialsModal = withStyles(styles)(
  injectIntl(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(CredentialsModalComponent)
  )
);
export default CredentialsModal;
