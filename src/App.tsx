import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Box, Grommet, Heading, Button } from "grommet";
import { Home } from "grommet-icons";
import AddressForm from "./shoppers/AddressForm";
import Bundles from "./shoppers/Bundles";
import Phone from "./shoppers/Phone";
import * as serviceWorker from "./serviceWorker";

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

interface StepCallback {
  step: number;
  keys: any;
}

export interface AppCallbacks {
  back: () => void;
  next: () => any;
}

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

const routing = (
  <Grommet theme={theme}>
    <Box fill>
      <AppBar>
        <Button icon={<Home />} onClick={() => {}} />
        <Heading level="3" margin="none">
          COVID GROCERIES
        </Heading>
        About
      </AppBar>
      <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Box flex align="center" justify="center">
          <Router>
            <div>
              <Route
                path="/address"
                component={() => (
                  <AddressForm next={(p: any) => console.log("next", p)} />
                )}
              />
              <Route
                path="/bundles"
                component={Bundles}
                next={(p: any) => console.log("next", p)}
              />
            </div>
          </Router>
        </Box>
      </Box>
    </Box>
  </Grommet>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// class App extends React.Component {
//   componentDidMount() {
//     console.log("props", this.props);
//   }
//   render() {
//     return (
//       <Grommet theme={theme}>
//         <Box fill>
//           <AppBar>
//             <Button icon={<Home />} onClick={() => {}} />
//             <Heading level="3" margin="none">
//               COVID GROCERIES
//             </Heading>
//             About
//           </AppBar>
//           <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
//             <Box flex align="center" justify="center">
//               <AddressForm next={(p: any) => console.log("next", p)} />
//               <Bundles />
//               <Phone />
//             </Box>
//           </Box>
//         </Box>
//       </Grommet>
//     );
//   }
// }

export default ReactDOM.render(routing, document.getElementById("root"));
