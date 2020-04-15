import db from "./db";
import addGeofire from "../database/addGeofire";
import { firestore } from "firebase-admin";

const normalizeSessionData = ({
  formattedAddress,
  lat,
  lng,
  bundle,
  deliveryNote = null,
}: any) => ({
  formattedAddress,
  lat,
  lng,
  bundle,
  deliveryNote,
  fulfilled: false,
  geoCoded: false,
  shopperConfirmed: false,
  textConfirmed: true,
  created: firestore.FieldValue.serverTimestamp(),
});

const getLocation = ({ lat, lng }: any) => [lat, lng];

const saveOrder = (sessionData: any, phone: string) =>
  db
    .collection("orders")
    .add(normalizeSessionData(sessionData))
    .then(({ id }) =>
      Promise.all([
        db.collection("orderLookup").doc(id).set({ phone }),
        db.collection("phoneLookup").doc(phone).set({ id }),
        addGeofire(id, getLocation(sessionData)),
      ])
    );

export default saveOrder;
