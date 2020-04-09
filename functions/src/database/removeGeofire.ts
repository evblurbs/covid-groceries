import db from "./db";

const removeGeofire = (orderId: string) =>
  db.ref(`geoFire/orders/${orderId}`).set(null);

export default removeGeofire;
