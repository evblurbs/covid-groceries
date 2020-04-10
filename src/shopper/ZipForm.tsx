/// <reference path="./ZipForm.d.ts" />

import React, { useState } from "react";
import { Box } from "grommet";
import { FormClose } from "grommet-icons";
import Script from "react-load-script";
import TextField from "../form/TextField";
import Navigate from "../form/Navigate";
import { GOOGLE_API_KEY } from "../configs/constants";
import { StepCallback } from "../interfaces";
import { screenIds } from "../routes/Shopper";

let autocomplete: any = null;

const ZipForm = ({ next }: StepCallback) => {
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
      inputs: { location: { lat, lng } },
      screenId: screenIds.SEARCH,
    });
  };

  const handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ["geocode"],
    };

    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete2"),
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
        placeholder="Postal Code"
        onChange={onChange}
        value={address}
        id="autocomplete2"
        icon={
          !disabled ? (
            <FormClose
              style={{ cursor: "pointer", pointerEvents: "all" }}
              onClick={clearAddress}
            />
          ) : undefined
        }
        reverse
        name="zip"
        label="Postal Code"
        desc="Enter your postal code or address to search for potential recipients near you. Make sure to select a location from the search dropdown."
      />
      <Navigate disabled={disabled} onClick={onSubmit} backPath="/" />
    </Box>
  );
};

export default ZipForm;
