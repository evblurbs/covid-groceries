import { db, FieldValue } from "../configs/firebase";
import { normalizeRecipientState, normalizeShopperState } from "./data";

export const createNewRequest = (state) => {
  const { phone, ...data } = normalizeRecipientState(state);
  return db
    .collection("orders")
    .add({ ...data, created: FieldValue.serverTimestamp() })
    .then(({ id }) => {
      const batch = db.batch();

      const orderRef = db.collection("orderLookup").doc(id);
      batch.set(orderRef, { phone });

      const phoneRef = db.collection("phoneLookup").doc(phone);
      batch.set(phoneRef, { id });

      return batch.commit().then(() => id);
    });
};

export const listenForSmsConfirm = (id, callback) =>
  db
    .collection("orders")
    .doc(id)
    .onSnapshot((doc) => callback(doc.data()));

export const getOrder = (phone: string) =>
  db.collection("orders").doc(phone).get();

export const createNewShopper = (state) => {
  const data = normalizeShopperState(state);
  return db.collection("shoppers").doc(data.phone).set(data);
};
