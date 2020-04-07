import React from "react";
import TextField from "./TextField";

interface Phone {
  onChange: (ev: any) => any;
  value: any;
  desc?: string;
}

const PhoneField = ({ onChange, value, desc }: Phone) => (
  <TextField
    placeholder="1230984567"
    onChange={onChange}
    value={value}
    type="number"
    name="phone"
    maxlength="11"
    label="Phone"
    desc={desc}
  />
);

export default PhoneField;
