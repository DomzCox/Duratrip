import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    orderId:'',
    order_status:'',
    order_route_num:'',
    order_service_type:''
}


const orderSlice = createSlice( {
    name:"orders",
    initialState,
    reducers:{
        //  Change the status of the order from the different states that they are in
        updateOrder: (state, action) => {
            
        },

        //  Retrieve the order for the single order details and informaiton
        getSingleOrder: (state, action) => {

        }
    }
} )

export const { updateOrder } = orderSlice.actions

export default orderSlice.reducer