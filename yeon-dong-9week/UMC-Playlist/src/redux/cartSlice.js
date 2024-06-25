import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../contents/cartItems";

const initialState = {
  items: cartItems,
  totalAlbums: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.amount += 1;
      }
    },
    decrease: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    calculateTotals: (state, action) => {
      let totalAlbums = 0;
      let totalAmount = 0;

      state.items.forEach((item) => {
        totalAlbums += item.amount;
        totalAmount += item.amount * item.price;
      });
      state.totalAlbums = totalAlbums;
      state.totalAmount = totalAmount;
    },
    
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;