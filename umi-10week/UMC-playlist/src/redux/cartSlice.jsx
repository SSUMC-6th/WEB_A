import { createSlice } from "@reduxjs/toolkit";
import { fetchCartItems } from "../constants/fetchCartItems";

const initialState = {
  items: [],
  loading: "idle",
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
          //amount가 1보다 적으면 리스트에서 삭제
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
    //왜 넣어야 하는거지...
    default: (state) => {
      return state || initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
