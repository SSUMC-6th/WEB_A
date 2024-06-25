import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action) => {
        state.modalOpen = true;
    },
    close: (state, action) => {
        state.modalOpen = false;
    },
    
  },
});

export const { open, close } =
    modalSlice.actions;
export default modalSlice.reducer;