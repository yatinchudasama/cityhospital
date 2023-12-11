// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKDc-HT5h_xgCuKo9exO4mK_RUmctAwQ0",
  authDomain: "react-project-cb897.firebaseapp.com",
  projectId: "react-project-cb897",
  storageBucket: "react-project-cb897.appspot.com",
  messagingSenderId: "234100029045",
  appId: "1:234100029045:web:3409a883876ed90495aa3c",
  measurementId: "G-J8ST40B7CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);