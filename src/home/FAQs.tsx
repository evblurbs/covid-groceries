import React from "react";
import { Heading } from "grommet";
import Expander from "../components/Expander";

const FAQs = () => (
  <React.Fragment>
    <Heading level={2} size="small">
      Frequently Asked Questions
    </Heading>
    <Expander
      startOpen={true}
      title="Does the volunteer shopper have to buy the groceries?"
      description="Yes. To get this out quick we decided to postpone accepting payments or donations to buy groceries for others. We also know a lot of people without work are in need of financial help to. We are looking into how we can allow volunteers to be paid by the recipients and/or a pay it forward model."
    />
    <Expander
      startOpen={true}
      title="Why do recipients select bundles/categories instead of items?"
      description="Yes. To get this out quick we decided to postpone accepting payments or donations to buy groceries for others. We also know a lot of people without work are in need of financial help to. We are looking into how we can allow volunteers to be paid by the recipients and/or a pay it forward model."
    />
    <Expander
      startOpen={true}
      title="Why was this created?"
      description="Yes. To get this out quick we decided to postpone accepting payments or donations to buy groceries for others. We also know a lot of people without work are in need of financial help to. We are looking into how we can allow volunteers to be paid by the recipients and/or a pay it forward model."
    />
  </React.Fragment>
);

export default FAQs;
