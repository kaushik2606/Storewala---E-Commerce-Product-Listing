// features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic safely using Immer internally
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addProducts: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { increment, decrement, addProducts } = counterSlice.actions;
export default counterSlice.reducer;
