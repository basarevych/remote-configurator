import { connect } from "react-redux";
import { authSelectors } from "../../state/auth";
import DevicesPageComponent from "../../components/Pages/DevicesPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const DevicesPage = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(DevicesPageComponent);

export default DevicesPage;
