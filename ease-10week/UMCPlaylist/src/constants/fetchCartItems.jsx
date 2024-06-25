import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCartItems = createAsyncThunk(
    'carts/fetchCartItems',
    async(_, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8080/musics');
            if(response.status === 200){
                const data = await response.json();
                return data;
            } else if(response.status === 404){
                throw new Error('404 Page Not Found')
            }
        }
        catch(error){
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)