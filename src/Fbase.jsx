import { initializeApp } from "firebase/app";
import {
  getFirestore, 
  collection,
  getDocs, 
  setDoc,
  onSnapshot,
  doc 
  } from "firebase/firestore";
import { firebaseConfig } from "./assets/firebaseConfig";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Fbase() {

  
  
  return <div className="container">Firebasedb</div>;
}

export default Fbase;
