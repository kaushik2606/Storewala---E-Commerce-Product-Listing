import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);

      if (product) {
        product.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);

      if (product) {
        product.quantity += action.payload.change;

        if (product.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== product.id);
        }
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, changeQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;