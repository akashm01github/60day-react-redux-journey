import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name:'product',
  initialState:{
    loading:false,
    list:[],
    error:''
  },
  reducers:{
    fetchProduct: (state,action)=>{
      state.loading = true;
    },
    updateAllProducts: (state,action)=>{
      state.list = action.payload
      state.loading = false;
      state.error = ''
    },
    fetchError: (state,action)=>{
      state.error = action.payload || 'Something Went Wrong.....'
    }
  }
})

export default slice.reducer;

export const {updateAllProducts,fetchProduct, fetchError} = slice.actions;