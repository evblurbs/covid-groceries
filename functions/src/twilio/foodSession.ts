import {
  foodRequestAddress,
  foodRequestBundleError,
  foodRequestDeliveryNote,
  foodRequestDone,
  foodRequestNoStep,
  foodRequestGeocodeError,
} from "./messages";
import geocodeAddress from "../google/geocode";
import saveOrder from "../firestore/saveOrder";

// steps
export const STEP_FOOD = "FOOD";
const STEP_ADDRESS = "ADDRESS";
const STEP_DELIVERY_NOTE = "DELIVERY_NOTE";

const findBundle = (text: string) => {
  let bundle;
  if (text.includes("1")) {
    bundle = "food";
  }
  if (text.includes("2")) {
    bundle = "toiletries";
  }
  if (text.includes("3")) {
    bundle = "bundle";
  }
  return bundle;
};

const foodSession = (text: string, request: any, phone: string) => {
  let responseText;
  switch (request.session.step) {
    case STEP_FOOD:
      const bundle = findBundle(text);
      if (bundle) {
        request.session.step = STEP_ADDRESS;
        request.session.bundle = bundle;
        responseText = foodRequestAddress;
      } else {
        responseText = foodRequestBundleError;
      }
      break;
    case STEP_ADDRESS:
      return geocodeAddress(text).then((result) => {
        if (result) {
          request.session.formattedAddress = result.formattedAddress;
          request.session.lat = result.lat;
          request.session.lng = result.lng;
          request.session.step = STEP_DELIVERY_NOTE;
          return foodRequestDeliveryNote;
        } else {
          return foodRequestGeocodeError;
        }
      });
    case STEP_DELIVERY_NOTE:
      if (text !== "NO") {
        request.session.deliveryNote = text;
      }
      return saveOrder(request.session, phone).then(() => foodRequestDone);
    default:
      responseText = foodRequestNoStep;
  }
  return Promise.resolve(responseText);
};

export default foodSession;
