import React from "react";
import {
  Box,
  Button,
  Text,
  Collapsible,
  Paragraph,
  ResponsiveContext,
} from "grommet";
import { FormDown, FormNext } from "grommet-icons";

const Expander = ({ startOpen = false, title, description }) => {
  const [openMenu, setOpenMenu] = React.useState(startOpen);

  const size = React.useContext(ResponsiveContext);
  const isSmall = size === "small";

  const MenuButton = ({ label, open, ...rest }) => {
    const Icon = open ? FormDown : FormNext;
    return (
      <Button hoverIndicator="background" {...rest}>
        <Box direction="row" align="center" pad="xsmall">
          <Icon color="brand" size={isSmall ? "medium" : "large"} />
          <Text size={isSmall ? "medium" : "xlarge"} color="dark-1">
            {label}
          </Text>
        </Box>
      </Button>
    );
  };

  return (
    <Box
      width="small"
      fill={true}
      margin={{ bottom: isSmall ? "small" : undefined }}
    >
      <MenuButton
        open={openMenu}
        label={title}
        onClick={() => {
          const newOpenMenu = !openMenu;
          setOpenMenu(newOpenMenu);
        }}
      />
      <Collapsible open={openMenu}>
        <Paragraph
          size={isSmall ? "medium" : "large"}
          margin={{
            left: isSmall ? "medium" : "large",
            top: isSmall ? "small" : "medium",
            right: isSmall ? "small" : "medium",
            bottom: isSmall ? undefined : "medium",
          }}
          color="dark-2"
          fill
        >
          {description}
        </Paragraph>
      </Collapsible>
    </Box>
  );
};

export default Expander;
