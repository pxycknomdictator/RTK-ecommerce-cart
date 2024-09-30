import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

export const productStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
