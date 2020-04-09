import React from "react";
import {
  Box,
  Heading,
  Grid,
  Paragraph,
  ResponsiveContext,
  Carousel,
  Collapsible
} from "grommet";
import RoutedButton from "../components/RoutedButton";
import { MapLocation, Basket, Chat, Search, Cart, Car } from "grommet-icons";

function Home() {
  const size = React.useContext(ResponsiveContext);
  console.log("size", size);
  return (
    <Box>
      <Heading level={1} size="small">
        Let's connect healthy people <i>already going shopping</i> with high
        risk individuals to donate and deliver some essential groceries.
      </Heading>
      <Grid
        columns={{
          count: size === "small" ? 1 : 2,
          size: "auto"
        }}
        gap="small"
      >
        <Box background="dark-2" pad="medium">
          <Heading level={3} size="small" margin="none">
            Recipients (high risk)
          </Heading>
          <Paragraph size="large" margin={{ top: "small", bottom: "medium" }}>
            Afraid to goto the grocery store? See if we can have someone get
            some items you need to hold you off.
          </Paragraph>
          <RoutedButton
            path="/bundles"
            primary
            size="medium"
            label="Request groceries"
            margin={{ bottom: size === "small" ? "small" : "none" }}
          />
        </Box>
        <Box background="dark-3" pad="medium">
          <Heading level={3} size="small" margin="none">
            Shoppers (healthy)
          </Heading>
          <Paragraph size="large" margin={{ top: "small", bottom: "medium" }}>
            Pick up $15-25 worth of goods and deliver it to a high risk person
            and reduce exposure/traffic at the grocery store.
          </Paragraph>
          <RoutedButton
            path="/search"
            primary
            size="medium"
            label="Find someone to help"
            margin={{ bottom: size === "small" ? "small" : "none" }}
          />
        </Box>
      </Grid>
      <Heading level={2} size="small">
        How does it work?
      </Heading>
      <Carousel>
        <Box
          pad={{
            top: "none",
            left: "xlarge",
            right: "xlarge",
            bottom: "xlarge"
          }}
          background="accent-1"
        >
          <Heading level={3} size="large" color="dark-2">
            1. Delivery Info
          </Heading>
          <Grid columns={["auto", "flex"]} gap="xlarge">
            <MapLocation size="xlarge" />
            <Paragraph size="xlarge" margin="none" color="dark-2">
              A recipient, or high risk individual, tells us where they want
              groceries delivered and any instructions to do a contact-less drop
              off.
            </Paragraph>
          </Grid>
        </Box>
        <Box
          pad={{
            top: "none",
            left: "xlarge",
            right: "xlarge",
            bottom: "xlarge"
          }}
          background="accent-2"
        >
          <Heading level={3} size="large" color="dark-2">
            2. Grocery Bundle
          </Heading>
          <Grid columns={["auto", "flex"]} gap="xlarge">
            <Basket size="xlarge" />
            <Paragraph size="xlarge" margin="none" color="dark-2">
              The recipient selects a category or bundle of items they would
              like to receive. We try to not enter anything specific to make it
              easy for volunteer shoppers.
            </Paragraph>
          </Grid>
        </Box>
        <Box
          pad={{
            top: "none",
            left: "xlarge",
            right: "xlarge",
            bottom: "xlarge"
          }}
          background="accent-3"
        >
          <Heading level={3} size="large" color="dark-2">
            3. Recipient Notifications
          </Heading>
          <Grid columns={["auto", "flex"]} gap="xlarge">
            <Chat size="xlarge" />
            <Paragraph size="xlarge" margin="none" color="dark-2">
              The recipient enters their phone number so we can text them
              notifications about their request.
            </Paragraph>
          </Grid>
        </Box>
        <Box
          pad={{
            top: "none",
            left: "xlarge",
            right: "xlarge",
            bottom: "xlarge"
          }}
          background="accent-4"
        >
          <Heading level={3} size="large" color="dark-2">
            4. Volunteer, meet Recipient
          </Heading>
          <Grid columns={["auto", "flex"]} gap="xlarge">
            <Search size="xlarge" />
            <Paragraph size="xlarge" margin="none" color="dark-2">
              A very kind individual who <em>is already going shopping</em>{" "}
              finds someone in need of groceries near them via Grocery Pals.
            </Paragraph>
          </Grid>
        </Box>
        <Box
          pad={{
            top: "none",
            left: "xlarge",
            right: "xlarge",
            bottom: "xlarge"
          }}
          background="accent-1"
        >
          <Heading level={3} size="large" color="dark-2">
            5. Volunteer goes shopping
          </Heading>
          <Grid columns={["auto", "flex"]} gap="xlarge">
            <Cart size="xlarge" />
            <Paragraph size="xlarge" margin="none" color="dark-2">
              The volunteer goes shopping and picks up $15 to $25 worth of
              groceries to donate to the recipient based on the category or
              bundle they selected.
            </Paragraph>
          </Grid>
        </Box>
        <Box
          pad={{
            top: "none",
            left: "xlarge",
            right: "xlarge",
            bottom: "xlarge"
          }}
          background="accent-2"
        >
          <Heading level={3} size="large" color="dark-2">
            6. The drop off
          </Heading>
          <Grid columns={["auto", "flex"]} gap="xlarge">
            <Car size="xlarge" />
            <Paragraph size="xlarge" margin="none" color="dark-2">
              The shopper delivers the groceries to the recipient following any
              instructions they entered. The shopper ensures it is a
              contact-less drop off.
            </Paragraph>
          </Grid>
        </Box>
        <Box
          pad={{
            top: "none",
            left: "xlarge",
            right: "xlarge",
            bottom: "xlarge"
          }}
          background="accent-3"
        >
          <Heading level={3} size="large" color="dark-2">
            7. Final notifications
          </Heading>
          <Grid columns={["auto", "flex"]} gap="xlarge">
            <Chat size="xlarge" />
            <Paragraph size="xlarge" margin="none" color="dark-2">
              Grocery Pals notifies the recipient that their donations has been
              delivered and thanks the volunteer for their time. :)
            </Paragraph>
          </Grid>
        </Box>
      </Carousel>
      <Heading level={2} size="small">
        Frequently Asked Questions
      </Heading>
      <Collapsible open={true}>
        <Paragraph size="xlarge" margin="none" color="dark-2">
          Grocery Pals notifies the recipient that their donations has been
          delivered and thanks the volunteer for their time. :)
        </Paragraph>
      </Collapsible>
    </Box>
  );
}

export default Home;
