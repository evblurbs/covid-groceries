import sendSMS from "../twilio/sendSMS";
import { confirmOrderMessage } from "../twilio/messages";

const confirmOrder = (request: any, response: any) => {
  const { phone } = request.body;
  return sendSMS(phone, confirmOrderMessage).then(() =>
    response.status(200).send({ sent: true })
  );
};

export default confirmOrder;
