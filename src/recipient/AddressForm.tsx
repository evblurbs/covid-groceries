/// <reference path="./AddressForm.d.ts" />

import React, { useState } from "react";
import { Box } from "grommet";
import { FormClose } from "grommet-icons";
import Script from "react-load-script";
import TextField from "../form/TextField";
import Navigate from "../form/Navigate";
import { GOOGLE_API_KEY } from "../configs/constants";
import { StepCallback } from "../interfaces";
import { screenIds, PATH_BUNDLES } from "../routes/Recipient";

let autocomplete: any = null;

const AddressForm = ({ next }: StepCallback) => {
  const [address, setAddress] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [response, setResponse] = useState({});

  const handlePlaceSelect = () => {
    const {
      geometry: { location = undefined } = {},
      formatted_address,
    } = autocomplete.getPlace();
    if (!location) return;
    const lat = location.lat();
    const lng = location.lng();
    setDisabled(false);
    setAddress(formatted_address);
    setResponse({
      inputs: { location: { lat, lng }, formatted_address },
      screenId: screenIds.ADDRESS,
    });
  };

  const handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ["address"],
    };

    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    autocomplete.setFields(["geometry", "formatted_address"]);

    // Fire Event when a suggested name is selected
    autocomplete.addListener("place_changed", handlePlaceSelect);

    return false;
  };

  const clearAddress = () => {
    setAddress("");
    setDisabled(true);
  };

  const onChange = (ev: any) => setAddress(ev.target.value);

  const onSubmit = () => {
    !disabled && next(response);
  };

  return (
    <Box width="large">
      <Script
        url={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`}
        onLoad={handleScriptLoad}
      />
      <TextField
        placeholder="123 Home St., Seattle, WA 98144"
        onChange={onChange}
        value={address}
        id="autocomplete"
        icon={
          !disabled ? (
            <FormClose
              style={{ cursor: "pointer", pointerEvents: "all" }}
              onClick={clearAddress}
            />
          ) : undefined
        }
        reverse
        name="address"
        label="Address"
        desc="Enter an address where you would like to get groceries delivered to. Make sure to select an option from the drop down."
      />
      <Navigate
        disabled={disabled}
        onClick={onSubmit}
        backPath={PATH_BUNDLES}
      />
    </Box>
  );
};

export default AddressForm;
