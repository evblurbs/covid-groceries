import { db } from "../configs/firebase";
import { normalizeRecipientState, normalizeShopperState } from "./data";
import { formatPhone } from "./strings";

export const createNewRequest = (state) => {
  const data = normalizeRecipientState(state);
  return db.collection("orders").doc(data.phone).set(data);
};

export const listenForSmsConfirm = (phone, callback, isShopper = false) =>
  db
    .collection(isShopper ? "shoppers" : "orders")
    .doc(formatPhone(phone))
    .onSnapshot((doc) => callback(doc.data()));

export const getOrder = (phone: string) =>
  db.collection("orders").doc(phone).get();

export const createNewShopper = (state) => {
  const data = normalizeShopperState(state);
  return db.collection("shoppers").doc(data.phone).set(data);
};
