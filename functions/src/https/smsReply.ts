import dbFunc from "../firestore/textConfirmed";
import sendSMS from "../twilio/sendSMS";
import { textConfirmedMessage } from "../twilio/messages";

const smsReply = (request: any, response: any) => {
  const { Body, From } = request.body;
  if (Body.toUpperCase().trim() === "YES") {
    return dbFunc(From)
      .then(() => sendSMS(From, textConfirmedMessage))
      .then(() => response.status(200).send({ sent: true }))
      .catch((err: any) => console.log("err", err));
  }
  return response.status(500).send();
};

export default smsReply;
