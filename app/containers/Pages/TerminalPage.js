import { connect } from "react-redux";
import { authSelectors } from "../../state/auth";
import { devicesOperations } from "../../state/devices";
import TerminalPageComponent from "../../components/Pages/TerminalPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const TerminalPage = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(TerminalPageComponent);

TerminalPage.getInitialProps = async ({ store, req, query }) => {
  await store.dispatch(devicesOperations.load({ req }));
  return { terminalId: query.terminalId };
};

export default TerminalPage;
