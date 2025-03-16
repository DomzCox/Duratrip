import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./slices/routeSlice"
import userReducer from "./slices/userSlice"
import orderReducer from './orderSlice'
import singleOrderReducer from './slices/SingleOrderSlice'

export const store = configureStore({
    reducer: {
       tripRoutes: routeReducer,
       user:userReducer,
       orders:orderReducer,
       singleOrder: singleOrderReducer
    }
})