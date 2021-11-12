import { ReactElement } from "react";
import { Toaster } from "react-hot-toast";
import MaterialProvider from "./MaterialProvider";
import ReduxProvider from "./ReduxProvider";

const Providers = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <>
      <Toaster />
      <ReduxProvider>
        <MaterialProvider>{children}</MaterialProvider>
      </ReduxProvider>
    </>
  );
};
export default Providers;
