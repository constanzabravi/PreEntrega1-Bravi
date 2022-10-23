// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from firebase/firestore

const firebaseConfig = {
  apiKey: "AIzaSyD3FlB2fgnYOMUe4WYGU-HoWpBmhRXtN0w",
  authDomain: "constanzabravi.firebaseapp.com",
  projectId: "constanzabravi",
  storageBucket: "constanzabravi.appspot.com",
  messagingSenderId: "948588237196",
  appId: "1:948588237196:web:b9fe6820eeb99969ccc6a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestoe(app)