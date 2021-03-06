import React from "react";
import { Box, Heading } from "grommet";
import HowItWorks from "../home/HowItWorks";
import GetStarted from "../home/GetStarted";
import FAQs from "../home/FAQs";

function Home() {
  return (
    <Box>
      <Heading level={1} size="small">
        Let's connect healthy people <i>already going shopping</i> with COVID-19
        high risk individuals to donate and deliver some essential groceries.
      </Heading>
      <GetStarted />
      <HowItWorks />
      <FAQs />
    </Box>
  );
}

export default Home;
