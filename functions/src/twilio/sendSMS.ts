import client from "./client";

const sendSMS = (toNumber: string, message: string) => {
  return client.messages.create({
    to: toNumber,
    from: "+12062782581",
    body: message
  });
};

export default sendSMS;
