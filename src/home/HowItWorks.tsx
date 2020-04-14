import React from "react";
import { Carousel, Heading, ResponsiveContext } from "grommet";
import { Basket, Chat, Cart, Car } from "grommet-icons";
import CarouselCard from "../components/CarouselCard";

const HomeCarousel = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <React.Fragment>
      <Heading level={2} size="small">
        How does it work?
      </Heading>
      <Carousel style={size === "small" ? { margin: "0 -24px" } : undefined}>
        <CarouselCard
          bgColor="accent-1"
          header="1. Grocery Bundle"
          Icon={Basket}
          description="A recipient, or high risk individual, tells Grocery Pals the type of items they would like to receive, their delivery address, and how to notify them."
        />
        <CarouselCard
          bgColor="accent-2"
          header="2. Grocery Pal"
          Icon={Cart}
          description={
            <span>
              A very kind individual who <em>is already going shopping</em>{" "}
              signs up to be a grocery pal. They purchase $15 to $25 worth of
              groceries to donate.
            </span>
          }
        />
        <CarouselCard
          bgColor="accent-3"
          header="3. Delivery"
          Icon={Car}
          description="The grocery pal drops off the donated groceries on their way home, ensuring a contactless delivery."
        />
        <CarouselCard
          bgColor="accent-4"
          header="4. Notifications"
          Icon={Chat}
          description="We notify the recipient via SMS that their donations have been delivered and thank the grocery pal for their time."
        />
      </Carousel>
    </React.Fragment>
  );
};

export default HomeCarousel;
