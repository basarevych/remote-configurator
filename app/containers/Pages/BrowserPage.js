import { connect } from "react-redux";
import { authSelectors } from "../../state/auth";
import { devicesOperations } from "../../state/devices";
import BrowserPageComponent from "../../components/Pages/BrowserPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const BrowserPage = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(BrowserPageComponent);

BrowserPage.getInitialProps = async ({ store, req, query }) => {
  await store.dispatch(devicesOperations.load({ req }));
  return {
    deviceId: query.deviceId,
    host: query.host,
    port: parseInt(query.port) || 0
  };
};

export default BrowserPage;
