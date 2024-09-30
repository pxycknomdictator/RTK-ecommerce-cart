import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
