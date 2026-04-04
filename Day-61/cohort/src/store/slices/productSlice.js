import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error: ''
  },
  reducers: {
    fetchProducts: (state) => {
      state.loading = true;
    },
    updateAllProducts: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    fethProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload
    }
  }

})

export default slice.reducer;

export const { updateAllProducts, fetchProducts, fethProductsError } = slice.actions;

