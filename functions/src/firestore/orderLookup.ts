import db from "./db";

const orderLookup = (orderId: string) =>
  db
    .collection("orderLookup")
    .doc(orderId)
    .get()
    .then((doc) => doc.data());

export default orderLookup;
