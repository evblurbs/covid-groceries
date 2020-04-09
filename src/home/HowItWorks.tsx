import React from "react";
import { Carousel, Heading } from "grommet";
import { MapLocation, Basket, Chat, Search, Cart, Car } from "grommet-icons";
import CarouselCard from "../components/CarouselCard";

const HomeCarousel = () => (
  <React.Fragment>
    <Heading level={2} size="small">
      How does it work?
    </Heading>
    <Carousel>
      <CarouselCard
        bgColor="accent-1"
        header="1. Delivery Info"
        Icon={MapLocation}
        description="A recipient, or high risk individual, tells us where they want groceries delivered and any instructions to do a contact-less drop off."
      />
      <CarouselCard
        bgColor="accent-2"
        header="2. Grocery Bundle"
        Icon={Basket}
        description="The recipient selects a category or bundle of items they would like to receive. We try to not enter anything specific to make it easy for volunteer shoppers."
      />
      <CarouselCard
        bgColor="accent-3"
        header="3. Recipient Notifications"
        Icon={Chat}
        description="The recipient enters their phone number so we can text them notifications about their request."
      />
      <CarouselCard
        bgColor="accent-4"
        header="4. Volunteer, meet Recipient"
        Icon={Search}
        description={
          <span>
            A very kind individual who <em>is already going shopping</em> finds
            someone in need of groceries near them via Grocery Pals.
          </span>
        }
      />
      <CarouselCard
        bgColor="accent-1"
        header="5. Volunteer goes shopping"
        Icon={Cart}
        description="The volunteer goes shopping and picks up $15 to $25 worth of groceries to donate to the recipient based on the category or bundle they selected."
      />
      <CarouselCard
        bgColor="accent-2"
        header="6. The drop off"
        Icon={Car}
        description="The shopper delivers the groceries to the recipient following any instructions they entered. The shopper ensures it is a contact-less drop off."
      />
      <CarouselCard
        bgColor="accent-3"
        header="7. Final notifications"
        Icon={Chat}
        description="Grocery Pals notifies the recipient that their donations has been delivered and thanks the volunteer for their time. :)"
      />
    </Carousel>
  </React.Fragment>
);

export default HomeCarousel;
