import db from "./db";

const textConfirmed = (phone: string) =>
  db.collection("orders").doc(phone).update({
    textConfirmed: true
  });

export default textConfirmed;
