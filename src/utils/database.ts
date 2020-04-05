import { GeoFire } from "geofire";
import { realTimeDb } from "../configs/firebase";
import { formatPhone } from "./strings";
import { getLocation, getPhone } from "./data";

// @ts-ignore
const ordersFirebaseRef = realTimeDb.ref("geoFire/orders");
// @ts-ignore
const geoFire = new GeoFire(ordersFirebaseRef);

export const saveOrderLocation = (phone: number, location: any) =>
  geoFire.set(formatPhone(phone), [location.lat, location.lng]);
