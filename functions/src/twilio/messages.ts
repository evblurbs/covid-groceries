export const confirmOrderMessage =
  "We received your request to get some groceries dropped off during the COVID-19 crises. Reply YES to confirm your request and we will update you via text messages. If you did not make this request, please ignore this message.";

export const textConfirmedMessage =
  "Please note you should call 911 for emergency matters and close friends or family for pressing concerns. We try to connect your request with a volunteer as fast as possible, but there is no guarantee. We will keep you posted and stay healthy!";

export const confirmShopperMessage =
  'Thank you very much for volunteering to help get groceries for those at high risk for COVID-19. Please reply "I ROCK" to confirm we have the correct number.';

export const shopperConfirmedMessage =
  "Your phone number has been confirmed. When you have delivered the order, please respond DONE to notify the recipient. Feel free to add a message to after DONE to tell the recipient about where their groceries are. THANKS AGAIN FOR BEING AWESOME!";

const deliveryOrderPrefix =
  "Great news! Your grocery order has been delivered! Please check your doorstep or where you instructed the volunteer to drop off your groceries.";

export const confirmDeliveryOrder = (note: string) =>
  note.length > 4
    ? `${deliveryOrderPrefix} Note from your shopper: ${note.slice(
        4,
        note.length
      )}`
    : deliveryOrderPrefix;

export const confirmDeliveryShopper =
  "THANK YOU! You are not only helping someone that is at high risk of becoming ill, but also lowering the exposure for yourself and others shopping at the same time.";
