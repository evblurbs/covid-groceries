import React from "react";
import { Box, Button } from "grommet";
import { FormNext, FormPrevious } from "grommet-icons";

const Navigate = ({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => any;
}) => {
  return (
    <Box align="end" margin={{ top: "medium" }}>
      <Box direction="row">
        <Button
          label="Back"
          onClick={() => {}}
          icon={<FormPrevious />}
          gap="xsmall"
          margin={{ right: "small" }}
        />
        <Button
          label="Next"
          primary
          onClick={onClick}
          icon={<FormNext />}
          reverse
          disabled={disabled}
          gap="xsmall"
        />
      </Box>
    </Box>
  );
};

export default Navigate;
