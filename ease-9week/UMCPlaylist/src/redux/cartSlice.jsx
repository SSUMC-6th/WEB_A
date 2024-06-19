import {createSlice} from '@reduxjs/toolkit'
import cartItems from '../constants/cartItems'

const initialState = cartItems;

export const cartSlice = createSlice({
    name : 'cartfunction',
    initialState,
    reducers:{
        increase: (state, action) =>{
            const item = state.find(e => e.id === action.payload);
            if (item) {
                item.amount += 1;
            }
        },
        decrease: (state, action) =>{
            const item = state.find(e => e.id === action.payload);
            if (item) {
                item.amount -= 1;
            }
        },
        removeItem: (state, action) =>{
            
        },
        clearCart: (state, action) =>{

        },
        calculateTotals: (state, action) =>{

        },
    }
})

export const {increase, decrease, removeItem, clearCart, calculateTotals} = cartSlice.actions
export default cartSlice.reducer