import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJliS7VOzQdGE40KWSz1U2nedg1YwC_H0",
  authDomain: "messanger-react-type-redux.firebaseapp.com",
  projectId: "messanger-react-type-redux",
  storageBucket: "messanger-react-type-redux.appspot.com",
  messagingSenderId: "615369514635",
  appId: "1:615369514635:web:a731936e834dc4974fbe8e",
  measurementId: "G-HZ2LBDHZW4",
};

const firebase = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const db = getFirestore();
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage();
