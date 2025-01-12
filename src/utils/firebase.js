// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc3gcQLoP1zeBYeo6qylxSlkdWe2gsXI8",
  authDomain: "prashant-dhavale01.firebaseapp.com",
  projectId: "prashant-dhavale01",
  storageBucket: "prashant-dhavale01.firebasestorage.app",
  messagingSenderId: "783727603991",
  appId: "1:783727603991:web:30fc2597b2b498372c8752",
  measurementId: "G-M5TK8N4HEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);