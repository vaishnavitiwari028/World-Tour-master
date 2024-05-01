import firebase from "firebase";
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from "../constants";

var firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
let allcountries = require("../data/regions/Oceania.geo.json");

export const saveData = async () => {
  console.log(allcountries);
  // allcountries.features.forEach(country=> {
  // if(country.id.includes("9")) return;
  // const geoData= require(`../data/countries/${country.id}.geo.json`)
  // db.ref(`/geoData/regions/Oceania`).set(allcountries);
  // })
};

export { db };
