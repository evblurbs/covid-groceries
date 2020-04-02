import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button } from "grommet";
import { FormNext, FormPrevious } from "grommet-icons";

const handleGoBack = (history, pathname) => history.push(pathname);

const Navigate = ({
  disabled,
  backPath,
  onClick,
}: {
  disabled?: boolean;
  backPath: string;
  onClick: () => any;
}) => {
  let history = useHistory();
  return (
    <Box align="end" margin={{ top: "medium" }} pad={{ bottom: "small" }}>
      <Box direction="row">
        <Button
          label="Back"
          onClick={() => handleGoBack(history, backPath)}
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
