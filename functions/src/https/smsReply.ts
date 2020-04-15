import express from "express";
import session from "express-session";
import dbFunc from "../firestore/textConfirmed";
import shopperConfirmed from "../firestore/shopperConfirmed";
import delivered from "../firestore/delivered";
import orderLookup from "../firestore/orderLookup";
import db from "../database/db";
// import sendSMS from "../twilio/sendSMS";
import {
  textConfirmedMessage,
  shopperConfirmedMessage,
  deliveryDoneMessage,
  confirmDeliveryOrder,
  confirmDeliveryShopper,
  foodRequestMessages,
} from "../twilio/messages";
import foodSession, { STEP_FOOD } from "../twilio/foodSession";
import TwilioResponse from "../twilio/response";

const FirebaseStore = require("connect-session-firebase")(session);

const smsReply = express().use(
  session({
    store: new FirebaseStore({
      database: db,
    }),
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

smsReply.post("*", (request: any, response: any): any => {
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

  if (request.session.step) {
    return foodSession(text, request, From).then((msg) =>
      TwilioResponse(response, msg)
    );
  }

  if (text === "FOOD") {
    request.session.step = STEP_FOOD;
    return TwilioResponse(response, foodRequestMessages);
  }

  return response.status(500).send();
});

export default smsReply;
