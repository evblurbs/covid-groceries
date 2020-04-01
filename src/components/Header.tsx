import React from "react";
import { Heading } from "grommet";

const Header = ({ children }: any) => (
  <Heading size="medium" level={2} margin={{ bottom: "xsmall" }}>
    {children}
  </Heading>
);

export default Header;
