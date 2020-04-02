import * as React from "react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";

const Recipient = ({ history }: RouteComponentProps): JSX.Element => {
  console.log("history", history);
  return <React.Fragment></React.Fragment>;
};

export default withRouter(Recipient);
