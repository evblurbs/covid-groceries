import { GeoFire } from "geofire";
import { realTimeDb } from "../configs/firebase";
import { formatPhone } from "./strings";
import { getLocation, getPhone } from "./data";

// @ts-ignore
const ordersFirebaseRef = realTimeDb.ref("geoFire/orders");
// @ts-ignore
const geoFire = new GeoFire(ordersFirebaseRef);

export const saveOrderLocation = (state: any) =>
  geoFire.set(formatPhone(getPhone(state)), getLocation(state));

export const fetchOrderIDs = (center, callback, radius = 100) => {
  const query = geoFire.query({ center, radius });
  const locationKeys: any[] = [];
  query.on("key_entered", (key, location, distance) => {
    locationKeys.push({ key, location, distance });
  });
  query.on("ready", () => {
    callback(locationKeys);
    query.cancel();
  });
};
