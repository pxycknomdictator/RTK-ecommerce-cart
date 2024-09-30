import { createSlice } from "@reduxjs/toolkit";

const _storage = "products";

const initialState = {
  products: JSON.parse(localStorage.getItem(_storage)) || [],
};

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExists = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!isExists) {
        state.products.push(action.payload);
        localStorage.setItem(_storage, JSON.stringify(state.products));
      }
    },

    incrementQuantity: (state, action) => {
      const isExists = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (isExists !== -1) {
        const product = state.products[isExists];
        const unitPrice = product.price / product.quantity;
        product.quantity += 1;
        product.price = product.quantity * unitPrice;
        localStorage.setItem(_storage, JSON.stringify(state.products));
      }
    },

    decrementQuantity: (state, action) => {
      const isExists = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (isExists !== -1) {
        const product = state.products[isExists];
        const unitPrice = product.price / product.quantity;
        product.quantity <= 1
          ? (product.quantity = 1)
          : (product.quantity -= 1);
        product.price = product.quantity * unitPrice;
        localStorage.setItem(_storage, JSON.stringify(state.products));
      }
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem(_storage, JSON.stringify(state.products));
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
