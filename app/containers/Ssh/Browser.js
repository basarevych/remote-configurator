import { connect } from "react-redux";
import { withRouter } from "next/router";
import BrowserComponent from "../../components/Ssh/Browser";
import { appSelectors } from "../../state/app";
import { devicesSelectors } from "../../state/devices";

const mapStateToProps = (state, props) => {
  return {
    appOrigin: appSelectors.getAppOrigin(state),
    name: devicesSelectors.getName(state, props),
    address: devicesSelectors.getAddress(state, props)
  };
};

const Browser = withRouter(
  connect(
    mapStateToProps,
    null
  )(BrowserComponent)
);
export default Browser;
