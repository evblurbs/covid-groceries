import { GeoFire } from "geofire";
import db from "./db";

// @ts-ignore
const ordersFirebaseRef = db.ref("geoFire/orders");
// @ts-ignore
const geoFire = new GeoFire(ordersFirebaseRef);

const addGeofire = (id: string, location: Array<number | string>) =>
  geoFire.set(id, location);

export default addGeofire;
