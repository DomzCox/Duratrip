import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    orderID:"",
    orderStatus:'Loaded',
    orderNewNotes:[],
    orderSalesPerson:{
        name:"",
        phone:""
    },

    orderAddress:{
        streetName:"",
        city:"",
        state:"",
        postal:0
        
       },
    orderCompletedStatus:false
}


const singleOrderSlice = createSlice({
    name:"singleorder",
    initialState,
    reducers:{
        addOrderNotes: (state, action) =>{
            state.orderNewNotes = action.payload
        },
        getOrderById: (state, action) =>{
            state.orderNewNotes = action.payload
        },
        changeOrderStatus: (state, action) =>{
            state.orderStatus = action.payload
        }
        
    }
});



export const { addOrderNotes, changeOrderStatus } = singleOrderSlice.actions
export default singleOrderSlice.reducer