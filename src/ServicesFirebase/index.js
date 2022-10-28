// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD3FlB2fgnYOMUe4WYGU-HoWpBmhRXtN0w",
  authDomain: "constanzabravi.firebaseapp.com",
  projectId: "constanzabravi",
  storageBucket: "constanzabravi.appspot.com",
  messagingSenderId: "948588237196",
  appId: "1:948588237196:web:b9fe6820eeb99969ccc6a9"
};

// Conecto mi proyecto con firebase
const app = initializeApp(firebaseConfig);

//Conecto con la base de datos de Firebase y la exporto para utilizarla donde quiera
export const db = getFirestore(app)