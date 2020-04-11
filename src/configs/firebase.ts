import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/analytics";
import { FIREBASE_API_KEY } from "./constants";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "covid-groceries-f59a0.firebaseapp.com",
  databaseURL: "https://covid-groceries-f59a0.firebaseio.com",
  projectId: "covid-groceries-f59a0",
  storageBucket: "covid-groceries-f59a0.appspot.com",
  messagingSenderId: "447485296712",
  appId: "1:447485296712:web:5e5778114990dfff67987d",
  measurementId: "G-6V68DZL05T",
};

const firebaseStagingConfig = {
  apiKey: "AIzaSyCI_yy98lVOhd8Q_yod21eLREHZ6BEXWSE",
  authDomain: "beta-grocery-pals.firebaseapp.com",
  databaseURL: "https://beta-grocery-pals.firebaseio.com",
  projectId: "beta-grocery-pals",
  storageBucket: "beta-grocery-pals.appspot.com",
  messagingSenderId: "257888890902",
  appId: "1:257888890902:web:74e590ded3c818fb0ec537",
  measurementId: "G-LBRT6J5VS8",
};

firebase.initializeApp(
  window.location.hostname === "grocerypals.org"
    ? firebaseConfig
    : firebaseStagingConfig
);

firebase.analytics();

export const db = firebase.firestore();
export const FieldValue = firebase.firestore.FieldValue;
export const realTimeDb = firebase.database();
