// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW4StQnCCMMjDrNreqkJF541kknqSSq3o",
  authDomain: "cityhospitel.firebaseapp.com",
  projectId: "cityhospitel",
  storageBucket: "cityhospitel.appspot.com",
  messagingSenderId: "19941004505",
  appId: "1:19941004505:web:c478710bbbf4caf3c99ac8",
  measurementId: "G-SMSE6BSFDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);