import React, { useState } from "react";
import { Box, RadioButtonGroup, Text, Heading } from "grommet";
import { Bundle, Cafeteria } from "grommet-icons";
import Header from "../components/Header";

const Bundles = () => {
  const [value, setValue] = useState();
  return (
    <Box
      width="large"
      height={{
        min: "unset",
      }}
    >
      <Header>Bundles</Header>
      <RadioButtonGroup
        name="bundles"
        direction="row"
        gap="medium"
        pad="large"
        height={{
          min: "unset",
        }}
        options={[
          {
            label: "Essentials",
            value: "essentials",
          },
          {
            label: "Frozen",
            value: "frozen",
          },
        ]}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        {(
          option: any,
          { checked, hover }: { checked: Boolean; hover: Boolean }
        ) => {
          const Icon = option.value === "essentials" ? Bundle : Cafeteria;
          let background;
          if (checked) background = "brand";
          else if (hover) background = "light-4";
          else background = "light-2";
          return (
            <Box
              pad="large"
              align="center"
              background={background}
              round
              width={{ min: "small" }}
              gap="small"
            >
              <Icon size="large" />
              <Heading
                level={4}
                margin={{
                  bottom: "small",
                }}
              >
                {option.label}
              </Heading>
              <Text>Description of bundle will go here</Text>
            </Box>
          );
        }}
      </RadioButtonGroup>
    </Box>
  );
};

export default Bundles;
