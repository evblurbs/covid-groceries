import React from "react";
import { Box, TextInput, Text } from "grommet";
import "./textField.css";

interface AddressFormProps {
  callback: any;
  placeholder: string;
  label: string;
  [x: string]: any;
}

const AddressForm = ({
  callback,
  placeholder,
  label,
  name,
  ...restOfPros
}: AddressFormProps) => {
  const [value, setValue] = React.useState("");
  return (
    <Box>
      {label && (
        <label htmlFor={name} className="formLabel">
          <Text size="large">{label}</Text>
        </label>
      )}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          callback(event.target.value);
        }}
        {...restOfPros}
      />
    </Box>
  );
};

export default AddressForm;
