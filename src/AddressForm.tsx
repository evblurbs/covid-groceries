import React from "react";
import TextField from "./form/TextField";
import { Box } from "grommet";

const AddressForm = () => {
  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  console.log("address2", address2);
  return (
    <Box pad="large">
      <TextField placeholder="Address 1" callback={setAddress1} />
      <TextField placeholder="Address 2" callback={setAddress2} />
      <TextField placeholder="City" callback={setAddress2} />
    </Box>
  );
};

export default AddressForm;
