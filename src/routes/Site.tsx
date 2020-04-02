import * as React from "react";
import { Route } from "react-router-dom";
import Home from "../screens/Home";
import Contact from "../screens/Contact";

const Recipient = (): JSX.Element => (
  <React.Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
  </React.Fragment>
);

export default Recipient;
