import * as firebase from "firebase/app";
import "firebase/firestore";
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

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
