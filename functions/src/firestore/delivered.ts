import db from "./db";

const delivered = (phone: string) =>
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
      batch.delete(shopperRef);

      const orderRef = db.collection("orders").doc(data.orderId);
      batch.update(orderRef, { fulfilled: true });

      return batch.commit().then(() => data.orderId);
    });

export default delivered;
