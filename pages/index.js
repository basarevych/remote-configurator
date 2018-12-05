import DevicesPage from "../app/containers/Pages/DevicesPage";
import { devicesOperations } from "../app/state/devices";

DevicesPage.getInitialProps = async ({ store, req }) => {
  await store.dispatch(devicesOperations.load({ req }));
};

export default DevicesPage;
