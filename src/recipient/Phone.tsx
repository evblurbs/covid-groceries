import React, { useState } from "react";
import { Box } from "grommet";
import TextField from "../form/TextField";
import Navigate from "../form/Navigate";
import { StepCallback } from "../interfaces";
import { screenIds, PATH_BUNDLES } from "../routes/Recipient";

const Phone = ({ back, next, ...rest }: StepCallback) => {
  const [phone, setPhone] = useState("");
  const onChange = (ev: any) => setPhone(ev.target.value);

  const onSubmit = () =>
    next({
      screenId: screenIds.PHONE,
      inputs: { phone },
    });

  return (
    <Box width="large">
      <TextField
        placeholder="1230984567"
        onChange={onChange}
        value={phone}
        name="deliveryNote"
        label="Phone"
        desc="Enter your phone number. We will send a text message to let you know if your order is picked up."
      />
      <Navigate onClick={onSubmit} backPath={PATH_BUNDLES} />
    </Box>
  );
};

export default Phone;
