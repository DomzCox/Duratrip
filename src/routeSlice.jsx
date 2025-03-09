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
import { firebaseConfig } from "./assets/firebaseConfig";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getRoutes() {
  
   let res = []
    //const snapShot = await getDocs(collectiondata);
    const snapShot = await getDocs(collection(db, "Trips"));
    const response = await snapShot.docs.map((doc) => doc.data());
    
    //console.log("Response: ",response)
    //route =  response
    response.map( (re) => {
      //console.log(re.sales_rep)
      res.push(re)
      route.push(re)
     })
     
     //console.log("Route: ", route)
     //console.log("RE: ", re)
     return res;
  }









// Async action to add a new route
export const addRoute = createAsyncThunk("routes/addRoute", async (payload, thunkAPI) => {
   

try{
    console.log(payload)
    const docRef = await addDoc(collection(db, "Trips"), payload);
    console.log("Document written with ID: ", docRef.id);
    return { id: docRef.id, ...payload };
}catch (error) {
    console.error("Error adding route:", error);
    return thunkAPI.rejectWithValue(error.message); // Handle error in reducer
  }



    
    return payload;
    
  });





const initialState = {
   route:[],
   loading: false, 
   error: null
}
const routeSlice = createSlice({
    name: "routes",
    initialState,
    reducers: {

        
        // Get the new route information ans send it to the firestore database

      setRoutes: (state, action) => {
            
            state.routes = action.payload; // Updates state with Firestore data
          },
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

export const { setRoutes } = routeSlice.actions

// Real-time Firestore Listener
export const listenForRoutes = () => (dispatch) => {
    const colRef = collection(db, "Trips");
    onSnapshot(colRef, (snapshot) => {
      const routes = snapshot.docs.map((doc) => ({ ...doc.data() }));
      dispatch(setRoutes(routes)); // Updates Redux store when Firestore changes
    });
  };
listenForRoutes()
export default routeSlice.reducer