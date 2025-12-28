import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: "products",
  initialState: {
    loading:false,
    list:[]
  },
  reducers:{
    updateAllProducts(state,action){
      state.list =  action.payload;
      state.loading = false
    },
    fetchProductLists(state){
      state.loading = true
    }
  }
})

export default slice.reducer;

export const {updateAllProducts,fetchProductLists} = slice.actions