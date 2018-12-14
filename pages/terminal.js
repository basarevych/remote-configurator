import TerminalPage from "../app/containers/Pages/TerminalPage";
import { devicesOperations } from "../app/state/devices";

TerminalPage.getInitialProps = async ({ store, req, query }) => {
  await store.dispatch(devicesOperations.load({ req }));
  return { terminalId: query.terminalId };
};

export default TerminalPage;
