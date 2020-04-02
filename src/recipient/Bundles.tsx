import React, { useState } from "react";
import { Box, RadioButtonGroup, Text, Heading } from "grommet";
import { Bundle, Cafeteria } from "grommet-icons";
import Navigate from "../form/Navigate";
import Header from "../components/Header";
import { screenIds, PATH_DELIVERY } from "../routes/Recipient";
import { StepCallback } from "../interfaces";

const Bundles = ({ next }: StepCallback) => {
  const [bundle, setBundle] = useState();
  const onSubmit = () =>
    next({
      screenId: screenIds.BUNDLES,
      inputs: { bundle },
    });
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
        value={bundle}
        onChange={(event) => setBundle(event.target.value)}
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
      <Navigate onClick={onSubmit} backPath={PATH_DELIVERY} />
    </Box>
  );
};

export default Bundles;
