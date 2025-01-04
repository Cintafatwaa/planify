// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMu4GjYj81AlD1uJ_AbrLvSZ7p41NWAns",
  authDomain: "planify-app-cab04.firebaseapp.com",
  projectId: "planify-app-cab04",
  storageBucket: "planify-app-cab04.firebasestorage.app",
  messagingSenderId: "1043453675483",
  appId: "1:1043453675483:web:79a019bcaf100914fa89fe",
  measurementId: "G-XYMV3NB3H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);