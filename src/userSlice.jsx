import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userThunk = createAsyncThunk("user/userSlice", async (payload, thunkAPI)=> {
console.log("User Thunk called")
return "passed"
})


const initialState = {
    isLoggedIn: false,
    role: 3,
    user:{
        username:"",
        password:""
    }
}


const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser: ( state, action ) =>{
        
            state.user.username = action.payload.username
            state.user.password = action.payload.password
           
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer