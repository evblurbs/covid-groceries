import React from "react";
import { Box, Heading, ResponsiveContext } from "grommet";
import HowItWorks from "../home/HowItWorks";
import GetStarted from "../home/GetStarted";
import FAQs from "../home/FAQs";

function Home() {
  const size = React.useContext(ResponsiveContext);
  console.log("size", size);
  return (
    <Box>
      <Heading level={1} size="small">
        Let's connect healthy people <i>already going shopping</i> with high
        risk individuals to donate and deliver some essential groceries.
      </Heading>
      <GetStarted />
      <HowItWorks />
      <FAQs />
    </Box>
  );
}

export default Home;
