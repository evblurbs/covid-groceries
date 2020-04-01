import React from "react";
import { Box, TextInput, Text } from "grommet";
import Header from "../components/Header";
import "./textField.css";

interface AddressFormProps {
  onChange: any;
  value: string;
  placeholder: string;
  label: string;
  desc?: string;
  [x: string]: any;
}

const AddressForm = ({
  value,
  onChange,
  placeholder,
  label,
  name,
  desc,
  ...restOfPros
}: AddressFormProps) => {
  return (
    <Box>
      {label && (
        <label htmlFor={name} className="formLabel">
          <Header>{label}</Header>
        </label>
      )}
      {desc && <Text margin={{ bottom: "small" }}>{desc}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...restOfPros}
      />
    </Box>
  );
};

export default AddressForm;
