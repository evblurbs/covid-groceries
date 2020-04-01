/// <reference path="./AddressForm.d.ts" />

import React from "react";
import { Box, Button, Text } from "grommet";
import Script from "react-load-script";
import { FormNext, FormPrevious } from "grommet-icons";
import TextField from "./form/TextField";
import { GOOGLE_API_KEY } from "./utils/constants";

let autocomplete: any = null;

const AddressForm = () => {
  const [address, setAddress] = React.useState("");

  return (
    <Box pad="large" width="large">
      <Script
        url={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`}
        onLoad={(ev) => {
          // Declare Options For Autocomplete
          const options = {
            types: ["address"],
          }; // To disable any eslint 'google not defined' errors

          // Initialize Google Autocomplete
          /*global google*/
          autocomplete = new google.maps.places.Autocomplete(
            document.getElementById("autocomplete"),
            options
          );

          // Avoid paying for data that you don't need by restricting the set of
          // place fields that are returned to just the address components and formatted
          // address.
          autocomplete.setFields(["address_components", "formatted_address"]);

          // Fire Event when a suggested name is selected
          autocomplete.addListener("place_changed", () => {
            const addressObject = autocomplete.getPlace();
            const address = addressObject.address_components;
            console.log("address", address);
          });

          return false;
        }}
      />
      <TextField
        placeholder="123 Home St., Seattle, WA 98144"
        callback={setAddress}
        id="autocomplete"
        name="address"
        label="Address"
      />
      <Text margin={{ top: "small" }}>
        Enter an address where you would like to get groceries delivered to.
      </Text>
      <Box align="end" margin={{ top: "medium" }}>
        <Box direction="row">
          <Button
            label="Back"
            onClick={() => {}}
            icon={<FormPrevious />}
            gap="xsmall"
            margin={{ right: "small" }}
          />
          <Button
            label="Next"
            primary
            onClick={() => {}}
            icon={<FormNext />}
            reverse
            disabled
            gap="xsmall"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AddressForm;
