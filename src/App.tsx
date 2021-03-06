import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Grommet, Heading } from "grommet";
import { Home as HomeIcon, Contact } from "grommet-icons";
import Routes from "./routes/Routes";
import RoutedButton from "./components/RoutedButton";

const theme = {
  global: {
    colors: {},
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "medium", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const App = (): JSX.Element => {
  return (
    <Grommet theme={theme}>
      <Box fill>
        <AppBar>
          <RoutedButton icon={<HomeIcon />} path="/" />
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Heading level="3" margin="none">
              GROCERY PALS
            </Heading>
          </Link>
          <RoutedButton icon={<Contact />} path="/contact" />
        </AppBar>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box
            flex
            align="center"
            justify="center"
            pad={{
              left: "large",
              right: "large",
              vertical: "small",
              bottom: "xlarge",
            }}
            style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}
          >
            <Routes />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

export default App;
