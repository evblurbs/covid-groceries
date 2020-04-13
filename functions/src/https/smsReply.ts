import dbFunc from "../firestore/textConfirmed";
import shopperConfirmed from "../firestore/shopperConfirmed";
import delivered from "../firestore/delivered";
import orderLookup from "../firestore/orderLookup";
// import sendSMS from "../twilio/sendSMS";
import {
  textConfirmedMessage,
  shopperConfirmedMessage,
  deliveryDoneMessage,
  confirmDeliveryOrder,
  confirmDeliveryShopper,
} from "../twilio/messages";
import TwilioResponse from "../twilio/response";

const smsReply = (request: any, response: any): any => {
  const { Body, From } = request.body;
  const text = Body.toUpperCase().trim();

  // Order confirmations
  if (text === "YES") {
    return dbFunc(From)
      .then(() => TwilioResponse(response, textConfirmedMessage))
      .catch((err: any) => console.log("err", err));
  }

  // Shopper confirmations
  if (text === "PAL") {
    return shopperConfirmed(From)
      .then((data) =>
        TwilioResponse(response, [
          shopperConfirmedMessage(data),
          deliveryDoneMessage,
        ])
      )
      .catch((err: any) => console.log("err", err));
  }

  const doneText = Body.trim();
  const done = doneText.slice(0, 4).toUpperCase();
  if (done === "DONE") {
    return delivered(From)
      .then((orderId) => orderLookup(orderId))
      .then(({ phone }: any) =>
        TwilioResponse(
          response,
          [confirmDeliveryOrder(doneText), confirmDeliveryShopper],
          [phone]
        )
      )
      .catch((err: any) => console.log("err", err));
  }

  return response.status(500).send();
};

export default smsReply;
