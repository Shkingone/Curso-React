// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiHUHhoVg2CsbNQ5l9ThLO2qHKxSpNyzo",
  authDomain: "proy-20d1c.firebaseapp.com",
  projectId: "proy-20d1c",
  storageBucket: "proy-20d1c.firebasestorage.app",
  messagingSenderId: "516709960850",
  appId: "1:516709960850:web:bd8425d70abf8b5386aa4b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);