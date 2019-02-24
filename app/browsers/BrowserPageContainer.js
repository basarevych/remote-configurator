import { withStyles } from "@material-ui/core/styles";
import BrowserPageComponent, { styles } from "./BrowserPage";

const BrowserPage = withStyles(styles)(BrowserPageComponent);
BrowserPage.getInitialProps = BrowserPageComponent.getInitialProps;

export default BrowserPage;
