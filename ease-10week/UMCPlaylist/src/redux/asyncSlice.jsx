import { creatSlice } from '@reduxjs/toolkit'
import { fetchCartItems } from '../constants/cartItems'

const initialState = {
    cartItems: [],
    status: 'idle', //대기상태
    error: null,
};

const asyncSlice = createSlice({
    name: 'cartapi',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
            .addCase(fetchCartItems.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.status = 'suceeded';
                state.cartItems = action.payload;
            })
            .addCase(fetchCartItems.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default asyncSlice.reducer;