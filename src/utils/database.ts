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
