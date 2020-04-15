const MessagingResponse = require("twilio").twiml.MessagingResponse;

const response = (
  res: any,
  messages: string | Array<string>,
  to: string | Array<string> = [],
  redirect?: string
) => {
  const twiml = new MessagingResponse();

  Array.isArray(messages)
    ? messages.forEach((msg, i) => {
        twiml.message({ to: to[i], method: "POST" }, msg);
      })
    : twiml.message(messages);

  if (redirect) {
    twiml.redirect(redirect);
  }

  return res
    .set("Content-Type", "text/xml; charset=utf8")
    .status(200)
    .send(twiml.toString());
};

export default response;
