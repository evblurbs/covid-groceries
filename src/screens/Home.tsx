import React from "react";
import { Box } from "grommet";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box pad="large">
      <Link to="/address">Recipient</Link>
      <Link to="/search">Shopper</Link>
    </Box>
  );
}

export default Home;
