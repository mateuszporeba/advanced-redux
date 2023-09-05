import { createSlice } from '@reduxjs/toolkit';

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      console.log('in addItemToCart reducer! ')
      const newItem = action.payload
      const existingItem = state.find(item => item.title === newItem.title)

      if (existingItem) {
        // If item already exists, update the quantity
        existingItem.quantity++
      } else {
        // If item doesn't exist, add it to the cart
        newItem.quantity = 1
        newItem.price = action.payload.price
        state.push(newItem)
      }
    },
    // addItemToCart: (state, action) => {
    //   console.log('Current state:', state.length)
    //   console.log('action.payload', action.payload)
    //   return [...state, action.payload]
    // },
    removeItemFromCart: (state, action) => {
      const itemToRemove = state.find(item => item.title === action.payload.title);

      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          itemToRemove.quantity -= 1;
        } else {
          // If quantity is 1 or less, remove the item from the cart
          const itemIndex = state.indexOf(itemToRemove);
          if (itemIndex !== -1) {
            state.splice(itemIndex, 1);
          }
        }
      }
    },
  },
});

export const selectCartItems = (state) => state.cartItems

export const { addItemToCart, removeItemFromCart } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;