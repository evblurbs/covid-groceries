import React, { useState } from "react";
import {
  Box,
  RadioButtonGroup,
  Text,
  Heading,
  ResponsiveContext
} from "grommet";
import { Restroom, Favorite, Cafeteria } from "grommet-icons";
import Navigate from "../form/Navigate";
import Header from "../components/Header";
import Description from "../components/Description";
import { screenIds, PATH_DELIVERY } from "../routes/Recipient";
import { StepCallback } from "../interfaces";

const Bundles = ({ next }: StepCallback) => {
  const [bundle, setBundle] = useState("");
  const size = React.useContext(ResponsiveContext);
  const [disabled, setDisabled] = useState(true);
  const bundlesData = [
    {
      label: "Toiletries",
      value: "toiletries",
      icon: Restroom,
      description:
        "If you need household essentials your Grocery Pal will deliever items such as soap, cleaning products and even toilet paper."
    },
    {
      label: "Food",
      value: "food",
      icon: Cafeteria,
      description:
        "If your pantry is getting bare your Grocery Pal will focus on purchasing canned soups, frozen meals and fresh vegetables."
    },
    {
      label: "Food + Toiletries",
      value: "bundle",
      icon: Favorite,
      description:
        "Can't decide? Your Grocery Pal will do their best to provide you with a few household items as well as groceries."
    }
  ];
  const onSubmit = () =>
    next({
      screenId: screenIds.BUNDLES,
      inputs: { bundle }
    });
  return (
    <Box
      width="large"
      height={{
        min: "unset"
      }}
    >
      <fieldset style={{ border: "none", padding: 0 }}>
        <legend>
          <Header
            margin={{
              bottom: "large"
            }}
          >
            Bundles
          </Header>
        </legend>
        <Description>Select an option that best fits your needs</Description>
        <RadioButtonGroup
          name="bundle"
          justify="center"
          align="center"
          direction={size === "small" ? "column" : "row"}
          gap="none"
          margin={{
            top: "medium"
          }}
          height={{
            min: "unset"
          }}
          options={bundlesData.map((bundle, index) => {
            return {
              label: bundle.label,
              value: bundle.value,
              name: "bundle",
              index: index
            };
          })}
          value={bundle}
          wrap={true}
          onChange={event => {
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
                pad={size === "medium" ? "medium" : "large"}
                align="center"
                background={background}
                round
                gap="none"
                width={size === "small" ? "100%" : "320px"}
                margin={{
                  bottom: size === "small" ? "large" : "medium",
                  right:
                    option.index % 2 === 0 &&
                    option.index !== bundlesData.length - 1
                      ? "medium"
                      : "none"
                }}
              >
                <Icon size="large" />
                <Heading
                  level={4}
                  margin={{
                    bottom: "small"
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
