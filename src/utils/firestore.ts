import { db } from "../configs/firebase";
import { normalizeRecipientState } from "./data";

export const createNewRequest = (state) => {
  const data = normalizeRecipientState(state);
  return db.collection("orders").doc(data.phone).set(data);
};
