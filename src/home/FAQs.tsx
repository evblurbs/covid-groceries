import React from "react";
import { Heading, Anchor } from "grommet";
import Expander from "../components/Expander";

const DataDesc = () => (
  <React.Fragment>
    We strongly believe so. We do not store any identifying data such as names
    or email addresses. The most sensitive type of data we store are phone
    numbers which are used for SMS notifications. We use the Google Cloud
    platform and follow the latest standards. Phone numbers and the link between
    phone numbers for a connected Grocery Pal and Recipient requires credentials
    created and managed by Google. The most accessible data is that which is
    viewable on our website and the minimum amount needed to connect a donor and
    recipient. After a recipient is connected with a donor, all of the recipient
    and donor data is no longer accessible without credentials. The data we
    expose while connecting donors and recipients includes:
    <ul>
      <li>
        <b>Grocery Bundle</b>: A name to identify the type of generic items
        needed
      </li>
      <li>
        <b>Create Date</b>: The date and time the request was created
      </li>
      <li>
        <b>Delivery Note</b>: Optional instructions on where to leave the
        delivery
      </li>
      <li>
        <b>Address</b>: Formatted address from Google Maps based on recipient's
        input
      </li>
      <li>
        <b>Map Coordinates</b>: We geocode the address above using public
        libraries to query requests by proximity
      </li>
      <li>
        <b>Phone Confirmed</b>: We store a flag to indicate whether the
        recipient has confirmed their phone number (
        <em>
          phone numbers are not stored in this data set, but instead in a more
          secure location that requires credentials
        </em>
        )
      </li>
      <li>
        <b>Grocery Pal Confirmed</b>: We store a flag to indicate whether we
        have connected the recipient with a Grocery Pal or donor. Once this flag
        changes from false to true, all the data above is no longer accessible
        without credentials
      </li>
    </ul>
  </React.Fragment>
);

const ImmediateDesc = () => (
  <span>
    Please use food banks, family, and close friends if you need an item
    immediately. We cannot guarantee you will receive anything, or if you do, we
    can't promise when and what will be delivered.
  </span>
);

const RiskDesc = () => (
  <span>
    The Centers for Disease Control and Prevention provides some information
    regarding people at{" "}
    <Anchor
      target="_blank"
      href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html"
    >
      higher risk for severe illness
    </Anchor>
    . If you are not sure but feel like you need help, PLEASE register with
    Grocery Pals. We are not restricting access and want to help those who are
    healthy but struggling financially. As soon as we have too much demand for
    recipients and not enough donors, we will try to prioritize accordingly.
  </span>
);

const MoreDesc = () => (
  <span>
    We'd love to hear from you! Email us at{" "}
    <Anchor href="mailto:mygrocerypals@gmail.com">
      mygrocerypals@gmail.com
    </Anchor>{" "}
    and we will reply as soon as we can.
  </span>
);

const FAQs = () => (
  <React.Fragment>
    <Heading level={2} size="small">
      Frequently Asked Questions
    </Heading>
    <Expander
      startOpen={true}
      title="What if I need an item immediately?"
      description={<ImmediateDesc />}
    />
    <Expander
      startOpen={true}
      title="Why was this created?"
      description="During this COVID-19 crisis, we've found grocery delivery services like Instacart and Amazon Fresh unavailable due to demand. We were surprised to see how crowded our local grocery store was, especially with people who might be at higher risk. We also saw generous people offering to drop off groceries to those in need, and figured we could help connect the dots."
    />
    <Expander
      startOpen={true}
      title="Do the volunteer shopper's have to buy the groceries?"
      description="Yes. Handling payments would prolong making this available. We also know a lot of people without work are in need of donations."
    />
    <Expander
      title="Why do recipients select bundles/categories instead of items?"
      description="We are not trying to replace online shopping, but instead fill a gap while shopping and delivery apps are too overwhelmed to provide service to everyone."
    />
    <Expander
      title="Why can't I be a Grocery Pal unless I'm shopping for myself?"
      description="If you shop for yourself and someone else at the same time, you reduce the traffic in a grocery store. Thus, you are also reducing the exposure for yourself and the other shoppers. Also, we've found the bottleneck of connecting recipients and donors is not with donors, but instead with signing up those in need. Luckily, many people want to help."
    />
    <Expander
      title="What if I don't receive my items or get the specific item(s) needed?"
      description="If you urgently need the item(s) missing, please contact a relative or close friend for help. Otherwise, you are more than welcome to place another request via Grocery Pals."
    />
    <Expander
      title="How do you confirm recipients of donations are high risk individuals?"
      description="We don't. We use the honor system and hope that people are honest. We encourage donating essential items that are not valuable or exciting, and only donating if you understand that it's possible the recipient might not be someone you consider as high risk or in need."
    />
    <Expander
      title="How do I know if I am a high risk individual?"
      description={<RiskDesc />}
    />
    <Expander
      title="Are you a non-profit and/or 503c organization?"
      description="No. We are just two individuals trying to help and making this app as quickly as we can. ❤️"
    />
    <Expander
      title="Is my data secure? How do you handle privacy?"
      description={<DataDesc />}
    />
    <Expander
      title="Can I get a tax deductible receipt for my donation?"
      description="No. Since we are not a 503c organization, we cannot provide tax deductible receipts. If you'd like to save your purchase receipt, we can look into retroactively providing tax deductible receipts should we get a lot of donations via our app, but there is no guarantee."
    />
    <Expander
      title="What if I still have questions?"
      description={<MoreDesc />}
    />
  </React.Fragment>
);

export default FAQs;
