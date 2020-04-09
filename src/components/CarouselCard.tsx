import React from "react";
import { Box, Heading, Grid, Paragraph, ResponsiveContext } from "grommet";

interface Card {
  bgColor: string;
  header: string;
  description: string | JSX.Element;
  Icon: any;
}

const CarouselCard = ({ bgColor, header, description, Icon }: Card) => {
  const size = React.useContext(ResponsiveContext);
  const isSmall = size === "small";
  return (
    <Box
      pad={{
        top: "none",
        left: "xlarge",
        right: "xlarge",
        bottom: "xlarge",
      }}
      background={bgColor}
      align={isSmall ? "center" : "start"}
    >
      <Heading
        level={isSmall ? 2 : 3}
        size={isSmall ? "medium" : "large"}
        color="dark-2"
        textAlign={isSmall ? "center" : "start"}
      >
        {header}
      </Heading>
      <Grid
        columns={isSmall ? ["fill"] : ["auto", "flex"]}
        gap={isSmall ? "medium" : "xlarge"}
        align={isSmall ? "center" : "start"}
      >
        <Icon
          size={isSmall ? "large" : "xlarge"}
          style={isSmall ? { margin: "0 auto" } : undefined}
        />
        <Paragraph
          size={isSmall ? "medium" : "xlarge"}
          margin="none"
          color="dark-2"
          textAlign={isSmall ? "center" : "start"}
        >
          {description}
        </Paragraph>
      </Grid>
    </Box>
  );
};

export default CarouselCard;
