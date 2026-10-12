import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import cartReducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
