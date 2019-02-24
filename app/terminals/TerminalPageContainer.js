import { withStyles } from "@material-ui/core/styles";
import TerminalPageComponent, { styles } from "./TerminalPage";

const TerminalPage = withStyles(styles)(TerminalPageComponent);
TerminalPage.getInitialProps = TerminalPageComponent.getInitialProps;

export default TerminalPage;
