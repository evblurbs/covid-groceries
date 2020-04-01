import React from "react";
import { Box } from "grommet";
import {
  BrowserRouter as Router,
  Link,
  Route, // for later
} from "react-router-dom";

function Home() {
  return (
    <Box fill>
      <Link to="/address">shoppers</Link>
      <Link to="/find">volunteers</Link>
    </Box>
  );
}

export default Home;
