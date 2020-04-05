import * as functions from "firebase-functions";
import * as https from "./https";

// TODO: Secure?
const cors = require("cors")({
  origin: "*",
  credentials: true,
  methods: "POST"
});

const httpsHandler = (method: any) =>
  functions.https.onRequest((request, response) => {
    cors(request, response, () => method(request, response));
  });

/*
 * Firebase Functions: HTTPS
 * All of our HTTPS functions
 */

export const confirmOrder = httpsHandler(https.confirmOrder);
export const smsReply = httpsHandler(https.smsReply);