import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQte: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    replaceProduct(state, action) {
      state.products = action.payload.products;
      state.totalQte = action.payload.totalQte;
    },
    addProduct(state, action) {
      const item = action.payload;
      const checkItem = state.products.find((elem) => elem.id === item.id);
      state.totalQte++
      if (checkItem) {
        checkItem.quantity++;
        checkItem.totalPrice = checkItem.totalPrice + checkItem.price;
      } else {
        state.products.push({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
        });
      }
    },
    removeProduct(state, action) {
      const itemId = action.payload;
      const existItem = state.products.find((elem) => elem.id === itemId);
      state.totalQte--;
      if (existItem.quantity > 1) {
        existItem.quantity--;
        existItem.totalPrice = existItem.totalPrice - existItem.price;
      } else
        state.products = state.products.filter(
          (elem) => elem.id !== existItem.id
        );
    },
  },
});

export const { addProduct, removeProduct, replaceProduct } =
  productSlice.actions;

export default productSlice;
