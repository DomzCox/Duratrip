import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    orderID:'',
    orderStatus:'',
    orderNewNotes:''
}


const singleOrderSlice = createSlice({
    name:"singleorder",
    initialState,
    reducers:{
        addOrderNotes: (state, action) =>{
            state.orderNewNotes = action.payload
        }
    }
})


export const { addOrderNotes } = singleOrderSlice.actions
export default singleOrderSlice.reducer