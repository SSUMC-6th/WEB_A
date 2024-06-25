import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import cartItems from "../constants/cartItems";
import { getMusic } from "../apis/getMusic";

export const getMusics = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMusic();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.amount += 1;
      }
    },
    decrement: (state, action) => {
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
    clearCart: (state) => {
      state.items = [];
    },
    calculateTotals: (state) => {
      let totalQuantity = 0;
      let totalPrice = 0;
      state.items.forEach((item) => {
        totalQuantity += item.amount;
        totalPrice += item.amount * item.price;
      });
      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMusics.pending, (state) => {
        state.status = "로딩중";
      })
      .addCase(getMusics.fulfilled, (state, action) => {
        state.status = "성공";
        state.items = action.payload;
        state.totalQuantity = action.payload.reduce(
          (total, item) => total + item.amount,
          0
        );
        state.totalPrice = action.payload.reduce(
          (total, item) => total + item.amount * item.price,
          0
        );
      })
      .addCase(getMusics.rejected, (state, action) => {
        state.status = "실패";
        state.error = action.payload || "오류";
        alert(action.payload || "오류");
      });
  },
});

export const { increment, decrement, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
