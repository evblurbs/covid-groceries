import React, { useState } from "react";
import { Box } from "grommet";
import TextField from "../form/TextField";
import Navigate from "../form/Navigate";
import { StepCallback } from "../interfaces";
import { screenIds, PATH_ADDRESS } from "../routes/Recipient";

const DeliveryNote = ({ next }: StepCallback) => {
  const [deliveryNote, setDeliveryNote] = useState("");
  const onChange = (ev: any) => setDeliveryNote(ev.target.value);

  const onSubmit = () =>
    next({
      screenId: screenIds.DELIVERY,
      inputs: { deliveryNote },
    });

  return (
    <Box width="large">
      <TextField
        placeholder="Leave at front door, place behind gate, etc."
        onChange={onChange}
        value={deliveryNote}
        name="deliveryNote"
        label="Delivery Note"
        desc="Add an optional description regarding how and where the items should be delivered. The shopper will not meet you in person. Instead a text message will tell you that the delivery occurred."
      />
      <Navigate onClick={onSubmit} backPath={PATH_ADDRESS} />
    </Box>
  );
};

export default DeliveryNote;
