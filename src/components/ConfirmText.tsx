import React from "react";
import { Box, Heading, Paragraph, Button } from "grommet";
import { Refresh } from "grommet-icons";

/*
 * We currently don't allow to go back and
 * resend the notice. We can try to handle
 * this in the future.
 */

const ConfirmText = ({ phone, isShopper = false }) => (
  <Box>
    <Heading level={1} size="small">
      You're almost done!
      <br />
      Just one more step...
    </Heading>
    <Paragraph size="large">
      {isShopper ? (
        <span>
          We just sent you a text message. Please respond to it <em>PAL</em> to
          confirm we have the correct number. This also ensures you have our
          number and can respond to complete a donation.
        </span>
      ) : (
        <span>
          We just sent you a text message. Please respond to it{" "}
          <em>
            <b>YES</b>
          </em>{" "}
          to confirm your number. This ensures we have the right number to text
          you when your groceries are delivered.
        </span>
      )}
    </Paragraph>
    <Paragraph size="medium">
      If you accidentally entered <em>{phone}</em> and need to reenter your
      number, please click below to refresh your browser and start over.
    </Paragraph>
    <Box align="start" margin={{ top: "medium" }} pad={{ bottom: "small" }}>
      <Box direction="row">
        <Button
          onClick={() => window.location.reload()}
          icon={<Refresh />}
          label="Refresh"
          fill={false}
        />
      </Box>
    </Box>
  </Box>
);

export default ConfirmText;
