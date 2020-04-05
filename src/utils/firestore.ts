import { db } from "../configs/firebase";
import { normalizeRecipientState } from "./data";
import { formatPhone } from "./strings";

export const createNewRequest = (state) => {
  const data = normalizeRecipientState(state);
  return db.collection("orders").doc(data.phone).set(data);
};

export const listenToOrder = (phone, callback) =>
  db
    .collection("orders")
    .doc(formatPhone(phone))
    .onSnapshot((doc) => callback(doc.data()));
