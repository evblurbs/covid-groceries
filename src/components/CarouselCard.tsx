import React from "react";
import { Box, Heading, Grid, Paragraph } from "grommet";

interface Card {
  bgColor: string;
  header: string;
  description: string | JSX.Element;
  Icon: any;
}

const CarouselCard = ({ bgColor, header, description, Icon }: Card) => (
  <Box
    pad={{
      top: "none",
      left: "xlarge",
      right: "xlarge",
      bottom: "xlarge",
    }}
    background={bgColor}
  >
    <Heading level={3} size="large" color="dark-2">
      {header}
    </Heading>
    <Grid columns={["auto", "flex"]} gap="xlarge">
      <Icon size="xlarge" />
      <Paragraph size="xlarge" margin="none" color="dark-2">
        {description}
      </Paragraph>
    </Grid>
  </Box>
);

export default CarouselCard;
