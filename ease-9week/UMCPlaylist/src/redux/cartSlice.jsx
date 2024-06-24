import {createSlice} from '@reduxjs/toolkit'
import cartItems from '../constants/cartItems'

const initialState = {cartItems, total:0};

export const cartSlice = createSlice({
    name : 'cartfunction',
    initialState,
    reducers:{
        increase: (state, action) =>{
            const item = state.cartItems.find(e => e.id === action.payload);
            if (item) {
                item.amount += 1;
            }
        },
        decrease: (state, action) =>{
            const item = state.cartItems.find(e => e.id === action.payload);
            if (item) {
                item.amount -= 1;
            }
        },
        removeItem: (state, action) =>{
            state.cartItems = state.cartItems.filter(e => e.id !== action.payload);
        },
        clearCart: (state, action) =>{
            state.cartItems = [];
        },
        calculateTotals: (state, action) =>{
            let totalAmount = 0;
            state.cartItems.forEach(item => {
                totalAmount += item.amount;
            });
            state.total = totalAmount;
        },
    }
})

export const {increase, decrease, removeItem, clearCart, calculateTotals} = cartSlice.actions
export default cartSlice.reducer