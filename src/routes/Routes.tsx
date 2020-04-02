import * as React from "react";
import Site from "./Site";
import Recipient from "./Recipient";
// import Shopper from "./Shopper";

const Routes = (): JSX.Element => {
  return (
    <React.Fragment>
      <Site />
      <Recipient />
      {/* <Shopper /> */}
    </React.Fragment>
  );
};

export default Routes;
