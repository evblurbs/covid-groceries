import React, { useState } from "react";
import { Box, RadioButtonGroup } from "grommet";

const Bundles = () => {
  const [value, setValue] = useState();
  return (
    <Box pad="large" align="center" justify="between">
      Bundles
      <RadioButtonGroup
        name="bundles"
        direction="row"
        gap="medium"
        pad="large"
        options={[
          { label: "Essentials", value: "essentials" },
          { label: "Frozen Pack", value: "frozen" }
        ]}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </Box>
  );
};

export default Bundles;
