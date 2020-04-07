import dbFunc from "../firestore/textConfirmed";
import shopperConfirmed from "../firestore/shopperConfirmed";
import sendSMS from "../twilio/sendSMS";
import {
  textConfirmedMessage,
  shopperConfirmedMessage,
} from "../twilio/messages";

const smsReply = (request: any, response: any) => {
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
  if (text === "I ROCK") {
    return shopperConfirmed(From)
      .then(() => sendSMS(From, shopperConfirmedMessage))
      .then(() => response.status(200).send({ sent: true }))
      .catch((err: any) => console.log("err", err));
  }

  return response.status(500).send();
};

export default smsReply;
