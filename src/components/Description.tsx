import React from "react";
import { Text } from "grommet";

const Description = ({ children }: any) => (
  <Text
    margin={{ bottom: "small" }}
    style={{ maxWidth: 580, display: "block" }}
  >
    {children}
  </Text>
);

export default Description;
