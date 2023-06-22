import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: `p_${Math.random()}`,
      title: "Test",
      description: "This is first product-amazing!",
      price: 6,
      amount: 1,
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice;
