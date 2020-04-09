import React from "react";
import { Box, Button, Text, Collapsible, Paragraph } from "grommet";
import { FormDown, FormNext } from "grommet-icons";

const MenuButton = ({ label, open, ...rest }) => {
  const Icon = open ? FormDown : FormNext;
  return (
    <Button hoverIndicator="background" {...rest}>
      <Box direction="row" align="center" pad="xsmall">
        <Icon color="brand" size="large" />
        <Text size="xlarge" color="dark-1">
          {label}
        </Text>
      </Box>
    </Button>
  );
};

const Expander = ({ startOpen = false, title, description }) => {
  const [openMenu, setOpenMenu] = React.useState(startOpen);

  return (
    <Box width="small" fill={true}>
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
          size="large"
          margin={{
            left: "large",
            top: "medium",
            right: "medium",
            bottom: "medium",
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
