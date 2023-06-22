import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisisble: false,
};

const uiSlicle = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisisble = !state.cartIsVisisble;
    },
  },
});

export const { toggle } = uiSlicle.actions;

export default uiSlicle;
