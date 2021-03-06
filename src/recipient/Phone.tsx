import React, { useState } from "react";
import { Box } from "grommet";
import Navigate from "../form/Navigate";
import PhoneField from "../form/PhoneField";
import { StepCallback } from "../interfaces";
import { screenIds, PATH_BUNDLES } from "../routes/Recipient";

const Phone = ({ back, next, ...rest }: StepCallback) => {
  const [phone, setPhone] = useState("");
  const [disabled, setDisabled] = useState(true);

  const onChange = (ev: any) => {
    const { value } = ev.target;
    const length = value.toString().length;
    if (length > 11) return;

    setPhone(value);
    setDisabled(length !== 10 && length !== 11);
  };

  const onSubmit = () =>
    next({
      screenId: screenIds.PHONE,
      inputs: { phone },
    });

  return (
    <Box width="large">
      <PhoneField
        onChange={onChange}
        value={phone}
        desc="Enter your phone number. We will send a text messages when someone accepts your request and when they deliver your bundle."
      />
      <Navigate
        disabled={disabled}
        onClick={onSubmit}
        backPath={PATH_BUNDLES}
      />
    </Box>
  );
};

export default Phone;
