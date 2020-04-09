import React from "react";
import { Box, Heading, Grid, Paragraph, ResponsiveContext } from "grommet";
import RoutedButton from "../components/RoutedButton";

const GetStarted = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Grid
      columns={{
        count: size === "small" ? 1 : 2,
        size: "auto",
      }}
      gap="small"
    >
      <Box background="dark-2" pad="medium">
        <Heading level={3} size="small" margin="none">
          Recipients (high risk)
        </Heading>
        <Paragraph size="large" margin={{ top: "small", bottom: "medium" }}>
          Afraid to goto the grocery store? See if we can have someone get some
          items you need to hold you off.
        </Paragraph>
        <RoutedButton
          path="/bundles"
          primary
          size="medium"
          label="Request groceries"
          margin={{ bottom: size === "small" ? "small" : "none" }}
        />
      </Box>
      <Box background="dark-3" pad="medium">
        <Heading level={3} size="small" margin="none">
          Shoppers (healthy)
        </Heading>
        <Paragraph size="large" margin={{ top: "small", bottom: "medium" }}>
          Pick up $15-25 worth of goods and deliver it to a high risk person and
          reduce exposure/traffic at the grocery store.
        </Paragraph>
        <RoutedButton
          path="/search"
          primary
          size="medium"
          label="Find someone to help"
          margin={{ bottom: size === "small" ? "small" : "none" }}
        />
      </Box>
    </Grid>
  );
};

export default GetStarted;
