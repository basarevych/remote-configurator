import { connect } from "react-redux";
import { authSelectors } from "../auth/state";
import DevicesPageComponent from "./DevicesPage";

const mapStateToProps = state => {
  return {
    userRoles: authSelectors.getRoles(state)
  };
};

const DevicesPage = connect(mapStateToProps)(DevicesPageComponent);
DevicesPage.getInitialProps = DevicesPageComponent.getInitialProps;

export default DevicesPage;
