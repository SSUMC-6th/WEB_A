import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
  },
});

export default store;
