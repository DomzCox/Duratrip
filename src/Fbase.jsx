import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { firebaseConfig } from "./assets/firebaseConfig";
import { useEffect } from "react";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const equipment_collection = collection(db, "Equipments/Sterilizers/Tuttnauer");
const user_collection = collection(db, "Users");

async function getCollections(collectiondata) {
  const shot = await getDocs(collectiondata);
  const response = await shot.docs.map((doc) => doc.data());
  console.log(response);
}

function Fbase() {

  useEffect(() => {
    getCollections(equipment_collection);
    getCollections(user_collection);
  }, [equipment_collection, equipment_collection]);

  
  return <div className="container">Firebasedb</div>;
}

export default Fbase;
