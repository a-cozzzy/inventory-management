// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPnunSRJl_7_aTHpSvdclucS_6ppk7FPM",
  authDomain: "inventory-management-42cde.firebaseapp.com",
  projectId: "inventory-management-42cde",
  storageBucket: "inventory-management-42cde.appspot.com",
  messagingSenderId: "310341990011",
  appId: "1:310341990011:web:6d23b16bb8d24d876194de",
  measurementId: "G-SEJ43K8H4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}