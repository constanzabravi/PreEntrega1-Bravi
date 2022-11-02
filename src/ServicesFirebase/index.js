//ENTORNO DE EJECUCION

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

//El objeto process es una variable global que está en el entorno de ejecución
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey, 
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Conecto mi proyecto con firebase
const app = initializeApp(firebaseConfig);

//Conecto con la base de datos de Firebase y la exporto para utilizarla donde quiera
export const db = getFirestore(app)