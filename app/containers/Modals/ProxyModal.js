import { Map } from "immutable";
import { injectIntl } from "react-intl";
import { getFormValues, getFormAsyncErrors } from "redux-form/immutable";
import { startAsyncValidation, stopAsyncValidation } from "redux-form";
import { devicesSelectors, devicesOperations } from "../../state/devices";
import createForm from "../../lib/createForm";
import ProxyModalComponent from "../../components/Modals/ProxyModal";

const formName = ProxyModalComponent.formName;

const mapStateToProps = (state, props) => {
  return {
    fieldValues: {
      [formName]: getFormValues(formName)(state) || Map()
    },
    fieldErrors: {
      [formName]: getFormAsyncErrors(formName)(state) || Map()
    },
    name: devicesSelectors.getName(state, {
      deviceId: props.deviceId
    })
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch,
    updateValidation: async errors => {
      await dispatch(startAsyncValidation(formName));
      await dispatch(stopAsyncValidation(formName, errors));
    },
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
  createForm(ProxyModalComponent, mapStateToProps, mapDispatchToProps)
);
export default ProxyModal;
