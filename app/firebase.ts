// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYkU6UXaD61VEIjmo6kzM_t-bSRmWhES0",
  authDomain: "z-breed.firebaseapp.com",
  projectId: "z-breed",
  storageBucket: "z-breed.appspot.com",
  messagingSenderId: "984022199587",
  appId: "1:984022199587:web:5b3bfd91460563c696f096",
  measurementId: "G-5P7LXYLB3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
// const app = getApps().length ? getApp : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


