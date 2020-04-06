import React, { useState } from "react";
import {
  Box,
  RadioButtonGroup,
  Text,
  Heading,
  ResponsiveContext,
} from "grommet";
import { Bundle, Cafeteria } from "grommet-icons";
import Navigate from "../form/Navigate";
import Header from "../components/Header";
import { screenIds, PATH_DELIVERY } from "../routes/Recipient";
import { StepCallback } from "../interfaces";

const Bundles = ({ next }: StepCallback) => {
  const [bundle, setBundle] = useState("");
  const size = React.useContext(ResponsiveContext);
  const [disabled, setDisabled] = useState(true);
  const bundlesData = [
    {
      label: "Essentials",
      value: "essentials",
      icon: Bundle,
      description:
        "From toothpaste to toilet paper, help provide those in need with essential items for daily life.",
    },
    {
      label: "Frozen",
      value: "frozen",
      icon: Cafeteria,
      description:
        "Frozen items can be stored for long periods of time and turned into delicious meals quickly.",
    },
  ];
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
      <fieldset style={{ border: "none", padding: 0 }}>
        <legend>
          <Header>Bundles</Header>
        </legend>

        <RadioButtonGroup
          name="bundle"
          justify="center"
          align="center"
          direction={size === "small" ? "column" : "row"}
          gap="medium"
          height={{
            min: "unset",
          }}
          options={bundlesData.map((bundle, index) => {
            return {
              label: bundle.label,
              value: bundle.value,
              name: "bundle",
              index: index,
            };
          })}
          value={bundle}
          wrap={true}
          onChange={(event) => {
            setBundle(event.target.value);
            setDisabled(false);
          }}
        >
          {(
            option: any,
            { checked, hover }: { checked: Boolean; hover: Boolean }
          ) => {
            let currentBundle = bundlesData[option.index];
            const Icon = currentBundle.icon;
            let background;
            if (checked) {
              background = "brand";
            } else if (hover) background = "light-4";
            else background = "light-2";
            return (
              <Box
                pad="large"
                align="center"
                background={background}
                round
                gap="none"
                width={size === "small" ? "100%" : "320px"}
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
                <Text>{currentBundle.description}</Text>
              </Box>
            );
          }}
        </RadioButtonGroup>
      </fieldset>

      <Navigate
        disabled={disabled}
        onClick={onSubmit}
        backPath={PATH_DELIVERY}
      />
    </Box>
  );
};

export default Bundles;
