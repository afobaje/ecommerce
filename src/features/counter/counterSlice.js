import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  products:[]
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
    //   state.products += action.payload;
    state.products.push(action.payload)
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
