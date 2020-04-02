import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button } from "grommet";
import { FormNext, FormPrevious } from "grommet-icons";

const Navigate = ({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => any;
}) => {
  let history = useHistory();
  const goBack = () => history.go(-1);
  return (
    <Box align="end" margin={{ top: "medium" }} pad={{ bottom: "small" }}>
      <Box direction="row">
        <Button
          label="Back"
          onClick={goBack}
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
