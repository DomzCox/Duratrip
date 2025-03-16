import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";


import { initializeApp } from "firebase/app";
import {
  getFirestore, 
  collection,
  getDocs, 
  setDoc,
  onSnapshot,
  doc,
  addDoc 
  } from "firebase/firestore";
import { firebaseConfig } from "../assets/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";

/*
END OF IMPORTS
*/
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()

/*
END OF FIREBASE INITILIZATIONS
*/


const signUp = () => {
    createUserWithEmailAndPassword(auth, "nyron84@gmail.com", "password")
.then( (cred) => {
    console.log("User Created: ", cred.user)
} ).catch( (err) => {
    console.log(err.message)
} )
}





// Async action to add a new route
export const addRoute = createAsyncThunk("routes/addRoute", async (payload, thunkAPI) => {
/*     const newRoute = {
        
        addr1:  payload.addr1,
        addr2:  payload.addr2,
        city:   payload.city,
        state:  payload.state,
        postal: payload.postal,
        cust_name:payload.cust_name,
        mobile:payload.mobile,
        order_num:"DP-" + payload.order_num,
        climb:payload.climbs,
        phone:payload.phone,
        sales_rep:payload.sale_rep,
        service:payload.service,
        stop_type:payload.stop_type,
        notes:payload.notes,
    } */
  


try{
    
    //const docRef = await addDoc(collection(db, payload.routenum), payload);
    //const docRef = await setDoc(doc(collection(db, payload.routenum )), testDoc)
    
    //console.log("Document written with ID: ", docRef.id);
    //return { id: docRef.id, ...payload };
}catch (error) {
    console.error("Error adding route:", error);
    return thunkAPI.rejectWithValue(error.message); // Handle error in reducer
  }
    
});





const initialState = {
   route:[],
   loading: false, 
   error: null,
   routeNum:'',
   routeNumIsSet: false,
   routeCurrentLocation:{
    lat:33.930828,
    lng:-98.484879
   },
   routeLocations: [],
   notifications: 0
}

const routeSlice = createSlice({
    name: "routes",
    initialState,
    reducers: {
 
    // Get the new route information ans send it to the firestore database
      setRoutes: (state, action) => {
            state.routes = action.payload; // Updates state with Firestore data
          },
      setRouteNum: (state, action) =>{
            state.routeNum = action.payload
      }, 
      updateRouteNumberStatus: (state) => {
        // When the route number is set change the state of the 'routeNumIsSet' to true
            state.routeNumIsSet = !state.routeNumIsSet
      },  
      logError: (state, action) => {
            state.error = action.payload
      } 
    },
    extraReducers: (builder) => {
        builder
          .addCase(addRoute.pending, (state) => {
            state.loading = true;
          })
          .addCase(addRoute.fulfilled, (state, action) => {
            state.route.push(action.payload); // Add new route to state
            state.loading = false;
          })
          .addCase(addRoute.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
          });
      },
})



export const { 
    setRoutes, 
    setRouteNum, 
    updateRouteNumberStatus ,
    logError
} = routeSlice.actions

// Real-time Firestore Listener
export const listenForRoutes = () => (dispatch) => {
    const colRef = collection(db, "Trips");
    onSnapshot(colRef, (snapshot) => {
      const routes = snapshot.docs.map((doc) => ({ ...doc.data() }));
      dispatch(setRoutes(routes)); // Updates Redux store when Firestore changes
    });
  };
//* /listenForRoutes() */
export default routeSlice.reducer