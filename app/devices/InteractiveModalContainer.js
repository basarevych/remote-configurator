import { withStyles } from "@material-ui/core/styles";
import { injectIntl } from "react-intl";
import { devicesSelectors, devicesOperations } from "./state";
import connectForm from "../app/forms/connectForm";
import InteractiveModalComponent, { styles } from "./InteractiveModal";

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

const InteractiveModal = withStyles(styles)(
  injectIntl(
    connectForm(InteractiveModalComponent, mapStateToProps, mapDispatchToProps)
  )
);
export default InteractiveModal;
