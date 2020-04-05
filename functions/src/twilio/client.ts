import * as functions from "firebase-functions";

const twilioConfig = functions.config().twilio;
const { sid, auth } = twilioConfig;

const client = require("twilio")(sid, auth);

export default client;
