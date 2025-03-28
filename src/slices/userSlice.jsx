import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userThunk = createAsyncThunk("user/userSlice", async (payload, thunkAPI)=> {
console.log("User Thunk called")
return "passed"
});

export const loginUser = createAsyncThunk("user/login", async () => {
    console.log("User login Options activated")
    let prm = new Promise((res,err) => setTimeout( () => res("hi"), 2000))
    prm.then(() => {return true})
    
});

export const logUserOut = createAsyncThunk("user/logOut", async () => {
    console.log("User is logged out")
});


const initialState = {
    isLoggedIn: false,
    role: 0,
    user:{
        username:"",
        password:""
    },
    loginError:""
}


const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser: ( state, action ) =>{
        
            state.user.username = action.payload.username
            state.user.password = action.payload.password
            state.isLoggedIn = !state.isLoggedIn
           
        },
        setLoginError: (state, action) =>{
            state.loginError = action.payload
        },

        extraReducers: (builder) => {
            builder
            .addCase(logOut.pending, (state) => {
                state.isLoggedIn = true;
             })
            .addCase(logOut.rejected, (state) => {
                         state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.isLoggedIn = false;
            
            })
            .addcase(login.fulfilled, (state) => {
                state.isLoggedIn = true
                console.log("fulfilled")
            })
        }
    }
})

export const { setUser, setLoginError } = userSlice.actions

export default userSlice.reducer