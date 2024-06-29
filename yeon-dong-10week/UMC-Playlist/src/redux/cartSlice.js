import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import cartItems from "../contents/cartItems";

// 비동기 작업 생성
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:8080/musics');
      if (!response.ok) {
        if (response.status === 404) {
          return thunkAPI.rejectWithValue({ message: '404 Page Not Found' });
        }
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: '에러가 발생했습니다. 데이터 요청 경로를 확인해주세요!' });
    }
  }
);

const initialState = {
  items: [],
  totalAlbums: 0,
  totalAmount: 0,
  status: 'idle', // loading 상태 추가
  error: null,   // 에러 상태 추가
};

const cartSlice = createSlice({
  name: 'cart',
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
          state.items = state.items.filter((item) => item.id !== action.payload);
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
    setError: (state, action) => {
      state.error = action.payload.message;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.message : '에러가 발생했습니다. 데이터 요청 경로를 확인해주세요!';
      });
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;