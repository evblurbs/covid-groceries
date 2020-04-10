import React from "react";
import { Box, Heading, Paragraph } from "grommet";

/*
 * We currently don't allow to go back and
 * resend the notice. We can try to handle
 * this in the future.
 */

const ConfirmedText = ({ isShopper = false }) => (
  <Box>
    <Heading level={1} size="small">
      You are all set!
    </Heading>
    <Paragraph size="large">
      {isShopper ? (
        <span>
          THANK YOU thank you thank you! Grocery Pals wouldn't be possible
          without you, and seeing kindness like yours is encouraging as we all
          work to beat COVID-19.
        </span>
      ) : (
        <span>
          Please remember there is no guarantee we can fulfill your order, but
          we will try our best to help! We hope you stay safe and healthy.
        </span>
      )}
    </Paragraph>
    <Paragraph size="medium">- Grocery Pals</Paragraph>
  </Box>
);

export default ConfirmedText;
