// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDes1hwkt3NIWOHKi2zCs5F7LTBxIFbJng",

  authDomain: "fitnessrep-262c8.firebaseapp.com",

  projectId: "fitnessrep-262c8",

  storageBucket: "fitnessrep-262c8.firebasestorage.app",

  messagingSenderId: "186029360304",

  appId: "1:186029360304:web:dd0417ea16c92306f8e775",

  measurementId: "G-SN3DDJBTEB"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
