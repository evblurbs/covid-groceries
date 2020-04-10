import dbFunc from "../firestore/textConfirmed";
import shopperConfirmed from "../firestore/shopperConfirmed";
import delivered from "../firestore/delivered";
import orderLookup from "../firestore/orderLookup";
import sendSMS from "../twilio/sendSMS";
import {
  textConfirmedMessage,
  shopperConfirmedMessage,
  confirmDeliveryOrder,
  confirmDeliveryShopper,
} from "../twilio/messages";

const smsReply = (request: any, response: any): any => {
  const { Body, From } = request.body;
  const text = Body.toUpperCase().trim();

  // Order confirmations
  if (text === "YES") {
    return dbFunc(From)
      .then(() => sendSMS(From, textConfirmedMessage))
      .then(() => response.status(200).send({ sent: true }))
      .catch((err: any) => console.log("err", err));
  }

  // Shopper confirmations
  if (text === "PAL") {
    return shopperConfirmed(From)
      .then(() => sendSMS(From, shopperConfirmedMessage))
      .then(() => response.status(200).send({ sent: true }))
      .catch((err: any) => console.log("err", err));
  }

  const doneText = Body.trim();
  const done = doneText.slice(0, 4).toUpperCase();
  if (done === "DONE") {
    return delivered(From)
      .then((orderId) => orderLookup(orderId))
      .then(({ phone }: any) => sendSMS(phone, confirmDeliveryOrder(doneText)))
      .then(() => sendSMS(From, confirmDeliveryShopper))
      .then(() => response.status(200).send({ sent: true }))
      .catch((err: any) => console.log("err", err));
  }

  return response.status(500).send();
};

export default smsReply;
