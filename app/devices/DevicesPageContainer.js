import { connect } from "react-redux";
import { authSelectors } from "../auth/state";
import DevicesPageComponent from "./DevicesPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const DevicesPage = connect(mapStateToProps)(DevicesPageComponent);
DevicesPage.getInitialProps = DevicesPageComponent.getInitialProps;

export default DevicesPage;
