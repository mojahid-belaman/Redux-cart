import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product";
import uiSlicle from "./ui";

const store = configureStore({
  reducer: { products: productSlice.reducer, ui: uiSlicle.reducer },
});

export default store;
