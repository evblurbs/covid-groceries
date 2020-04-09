import * as admin from "firebase-admin";

export const app = admin.initializeApp();
const db = admin.firestore();

export default db;
