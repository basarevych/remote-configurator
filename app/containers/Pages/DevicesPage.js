import { connect } from "react-redux";
import { appSelectors } from "../../state/app";
import { authSelectors } from "../../state/auth";
import { devicesOperations } from "../../state/devices";
import DevicesPageComponent from "../../components/Pages/DevicesPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state),
    proxyOrigin: appSelectors.getProxyOrigin(state)
  };
};

const DevicesPage = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(DevicesPageComponent);

DevicesPage.getInitialProps = async ({ store, req }) => {
  await store.dispatch(devicesOperations.load({ req }));
};

export default DevicesPage;
