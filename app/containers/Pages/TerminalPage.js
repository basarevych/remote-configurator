import { connect } from "react-redux";
import { authSelectors } from "../../state/auth";
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

export default TerminalPage;
