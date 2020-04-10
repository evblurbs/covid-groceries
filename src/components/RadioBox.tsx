import React from "react";
import { Box, Text, Heading, ResponsiveContext } from "grommet";

const RadioBox = ({ checked, hover, Icon, label, description }: any) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box
      pad={size === "medium" ? "medium" : "large"}
      align={Icon ? "center" : undefined}
      background={checked ? "brand" : hover ? "light-4" : "light-2"}
      round
      gap="none"
      height={size === "small" ? undefined : "small"}
      justify="center"
      animation="fadeIn"
      margin={{ bottom: "small", right: "small" }}
    >
      {Icon && <Icon size="large" />}
      <Heading
        level={4}
        margin={{
          bottom: "small",
          top: Icon ? undefined : "none",
        }}
      >
        {label}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

export default RadioBox;
