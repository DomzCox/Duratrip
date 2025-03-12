import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./routeSlice"
import userReducer from "./UserSlice"
import orderReducer from './orderSlice'
import singleOrderReducer from './SingleOrderSlice'

export const store = configureStore({
    reducer: {
       tripRoutes: routeReducer,
       user:userReducer,
       orders:orderReducer,
       singleOrder: singleOrderReducer
    }
})