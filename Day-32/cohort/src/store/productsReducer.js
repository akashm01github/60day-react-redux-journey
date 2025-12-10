
import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
  name:"product",
  initialState: {
    loading:false,
    list:[]
  },
  reducers:{
     fetchProducts(state){
      state.loading = true
    },
    updateAllProducts(state,action){
      state.loading = false
      state.list =  action.payload
    },
   
  }
})


export const getAllProducts = (state) => state.products.list;

export const getProductLoadingState = (state) => state.products.loading;

export default slice.reducer;

export const {updateAllProducts,fetchProducts} = slice.actions;