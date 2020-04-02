import * as React from "react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import AddressForm from "../recipient/AddressForm";
import Bundles from "../recipient/Bundles";
import Phone from "../recipient/Phone";

const Recipient = ({ history }: RouteComponentProps): JSX.Element => {
  console.log("history", history);
  return (
    <React.Fragment>
      <Route
        path="/address"
        exact
        component={() => (
          <AddressForm next={(p: any) => console.log("next", p)} />
        )}
      />
      <Route
        path="/bundles"
        component={Bundles}
        next={(p: any) => console.log("next", p)}
      />
      <Route
        path="/phone"
        component={Phone}
        next={(p: any) => console.log("next", p)}
      />
    </React.Fragment>
  );
};

export default withRouter(Recipient);
