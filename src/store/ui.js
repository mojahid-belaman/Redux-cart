import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisisble: false,
  notification: null,
};

const uiSlicle = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisisble = !state.cartIsVisisble;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { toggle, showNotification } = uiSlicle.actions;

export default uiSlicle;
