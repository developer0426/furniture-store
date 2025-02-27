import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './CreateSlice/createSlice';

export const myStore = configureStore({
  reducer: {
    productSlice: productSlice.reducer, // Ensures `productSlice` is a key in the store
  },
})

export default myStore;

