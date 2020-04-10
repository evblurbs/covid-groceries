import React from "react";
import { Box, Anchor, Paragraph } from "grommet";

function Home() {
  return (
    <Box pad="large">
      <Paragraph size="large" textAlign="center">
        For questions or concerns, please contact us as{" "}
        <Anchor href="mailto:mygrocerypals@gmail.com">
          mygrocerypals@gmail.com
        </Anchor>
        . This project was created as a side-project by two people trying to
        help. If you would like to help us manage this project or have ideas on
        how to improve it, please reach out!
      </Paragraph>
    </Box>
  );
}

export default Home;
