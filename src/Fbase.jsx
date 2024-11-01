import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from './assets/firebaseConfig';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collect = collection(db, 'Equipments/Sterilizers/Tuttnauer');
const shot = await getDocs(collect)
const response = await shot.docs.map( doc => doc.data())
console.log(response)

function Fbase() {
  return (
    <div className='container'>Firebasedb</div>
  )
}

export default Fbase;