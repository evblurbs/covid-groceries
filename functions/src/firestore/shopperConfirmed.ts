import db from "./db";

const shopperConfirmed = (phone: string) =>
  db
    .collection("shoppers")
    .doc(phone)
    .get()
    .then((doc) => {
      const data = doc.data();
      // TODO: Error handling
      if (!data) return;

      const batch = db.batch();

      const shopperRef = db.collection("shoppers").doc(phone);
      batch.update(shopperRef, { textConfirmed: true });

      const orderRef = db.collection("orders").doc(data.orderId);
      batch.update(orderRef, { shopperConfirmed: true, shopper: phone });

      return batch.commit();
    });

export default shopperConfirmed;
