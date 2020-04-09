import db from "./db";

const textConfirmed = (phone: string) =>
  db
    .collection("phoneLookup")
    .doc(phone)
    .get()
    .then((doc) => {
      const data = doc.data();
      if (!data) return;
      return db.collection("orders").doc(data.id).update({
        textConfirmed: true,
      });
    });

export default textConfirmed;
