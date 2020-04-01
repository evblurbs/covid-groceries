import React from "react";
import { Box, Grommet, Heading, Button } from "grommet";
import { Notification } from "grommet-icons";
import AddressForm from "./AddressForm";
import Bundles from "./Bundles";
import Phone from "./Phone";

const theme = {
  global: {
    colors: {},
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    }
  }
};

const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme}>
      <Box fill>
        <AppBar>
          Hello
          <Heading level="3" margin="none">
            Covid Groceries
          </Heading>
          <Button icon={<Notification />} onClick={() => {}} />
        </AppBar>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex align="center" justify="center">
            <AddressForm />
            <Bundles />
            <Phone />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
