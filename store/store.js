import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./Reducers/cartReducer"
import userReducer from './Reducers/userReducer'
export const store = configureStore({
  reducer: {
    cartReducer,userReducer
  },
})