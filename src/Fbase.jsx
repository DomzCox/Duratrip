import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6n_M00lv9-To_p2_XYGguwh3JodAeres",
  authDomain: "duratrip-fe89c.firebaseapp.com",
  projectId: "duratrip-fe89c",
  storageBucket: "duratrip-fe89c.firebasestorage.app",
  messagingSenderId: "378317648749",
  appId: "1:378317648749:web:da26383131c56e7d8fe064",
  measurementId: "G-JM0TCZD6QC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

function Fbase() {
  return (
    <div>Fbase</div>
  )
}

export default Fbase