import * as functions from "firebase-functions";
import client from "./client";

const twilioConfig = functions.config().twilio;
const { phone } = twilioConfig;

const sendSMS = (toNumber: string, message: string) => {
  return client.messages.create({
    to: toNumber,
    from: phone,
    body: message,
  });
};

export default sendSMS;
