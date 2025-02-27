import { createSlice } from '@reduxjs/toolkit';


export const productSlice = createSlice({
  name: 'product-slice',
  initialState : {
    cart: []
  },
  reducers: {
    addToCart: (state , action) => {
        state.cart.push(action.payload)
    },
    removeFromCart: (state , action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.cart = []; 
    },
  },
})

export const { addToCart , removeFromCart , clearCart } = productSlice.actions
