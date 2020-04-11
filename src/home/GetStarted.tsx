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
          Recipient (high risk)
        </Heading>
        <Paragraph size="large" margin={{ top: "small", bottom: "medium" }}>
          Afraid to go to the grocery store? See if we can find someone to drop
          off some donated items to hold you over (est. delivery time in days).
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
          Grocery Pal (healthy)
        </Heading>
        <Paragraph size="large" margin={{ top: "small", bottom: "medium" }}>
          Pick up $15-$25 worth of groceries to donate and deliver to a high
          risk person while reducing exposure at the grocery store.
        </Paragraph>
        <RoutedButton
          path="/search"
          primary
          size="medium"
          label="Help someone"
          margin={{ bottom: size === "small" ? "small" : "none" }}
        />
      </Box>
    </Grid>
  );
};

export default GetStarted;
