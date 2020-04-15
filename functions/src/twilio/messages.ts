export const confirmOrderMessage =
  "We received your request to get some groceries dropped off during the COVID-19 crises. Reply YES to confirm that request and get inline.";

export const textConfirmedMessage =
  "Please note you should call food banks for emergency matters and close friends or family for pressing concerns. We try to connect your request with a volunteer as fast as possible, but there is no guarantee. We will keep you posted and stay healthy!";

export const confirmShopperMessage =
  "Thank you very much for volunteering to be a grocery pal to someone in need during this crises. Please reply PAL to confirm we have the correct number.";

const bundleMap: any = {
  food:
    "Please pick up food such as frozen meals, canned soups, and fresh vegetables.",
  toiletries:
    "Please pick up essential items like soap, cleaning products, and toilet paper.",
  bundle:
    "Please pick up some food (i.e. frozen meals, fresh vegetables) and household essentials (i.e. toilet paper, cleaning products).",
};

interface ShopperData {
  formattedAddress: string;
  bundle: string;
  deliveryNote: string;
}

const deliveryNoteMessage = (note: string) =>
  note.length ? ` Delivery instructions: ${note}` : "";

export const shopperConfirmedMessage = ({
  formattedAddress,
  bundle,
  deliveryNote,
}: ShopperData) =>
  `${
    bundleMap[bundle]
  } You can deliver the items at ${formattedAddress}. ${deliveryNoteMessage(
    deliveryNote
  )}`;

export const deliveryDoneMessage =
  "Once the donation is delivered, reply DONE to this message and we will notify the recipient. Thank you again for your help!";

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

export const foodRequestMessages = [
  "Please select a grocery bundle you want by replying with one of the following numbers:",
  "1. Food - canned soups, frozen meals, and fresh vegetables.",
  "2. Toiletries - soap, cleaning products, and toilet paper.",
  "3. Food + Toiletries - few household items and groceries.",
];

export const foodRequestAddress =
  "Please provide the address for where you would like your groceries delivered. Just provide the address. You will be able to provide delivery instructions in the next step.";

export const foodRequestBundleError =
  "Sorry, we were unable to handle your response. Please try again by responding with a number (i.e. 1 for the food bundle).";

export const foodRequestDeliveryNote =
  "Please provide any additional delivery instructions (i.e. leave on front door) or NO to indicate no specific instructions needed.";

export const foodRequestDone =
  "Thank you! You are all set and we will notify you if we find a grocery pal to drop off some essential items. Please note that although we do our best to match you, there is no guarantee.";

export const foodRequestNoStep =
  "Sorry, we were unable to handle your response. Please try again.";

export const foodRequestGeocodeError =
  "We were unable to geocode that address. Please try again.";
