// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLAUj2RGal5pOGigOw2QA2BfhmvxHWgPg",
  authDomain: "daddygo-ba042.firebaseapp.com",
  projectId: "daddygo-ba042",
  storageBucket: "daddygo-ba042.appspot.com",
  messagingSenderId: "59705820200",
  appId: "1:59705820200:web:9f778b66acdf93b8d1611d",
  measurementId: "G-NEHCQVJZ4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = getApps().length ? getApp : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

