import React from "react";
import { Box, Text, Heading, ResponsiveContext } from "grommet";

const RadioBox = ({ checked, hover, Icon, label, description }: any) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box
      pad="medium"
      align={Icon ? "center" : undefined}
      background={checked ? "brand" : hover ? "light-4" : "light-2"}
      round
      gap="none"
      width={size === "small" ? "100%" : "320px"}
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
