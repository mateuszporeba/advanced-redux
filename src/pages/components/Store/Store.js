import { configureStore } from '@reduxjs/toolkit'
import cartItemsReducer from './CartItemsSlice'

export default configureStore({
  reducer: {
   cartItems: cartItemsReducer,
  },
})