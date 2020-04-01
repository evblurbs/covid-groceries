import React from "react";
import { Box, TextInput } from "grommet";

const AddressForm = ({
  callback,
  placeholder,
}: {
  callback: any;
  placeholder: string;
}) => {
  const [value, setValue] = React.useState("");
  return (
    <Box>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          callback(event.target.value);
        }}
      />
    </Box>
  );
};

export default AddressForm;
