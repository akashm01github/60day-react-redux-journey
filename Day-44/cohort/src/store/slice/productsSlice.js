import { createSlice } from '@reduxjs/toolkit'
// import { productsList } from '../productsList'

// export default function productsReducer(state = productsList) {
//   return state
// }

const productSlice = createSlice({
  name:'products',
  initialState:{
    loading:false,
    list:[]
  },
  reducers:{
    updateAllProducts(state,action){
      state.list =  action.payload;
      state.loading = false;
    },
    fetchProductLists(state,action){
      state.loading = true
    }
  }
})

export const getAllProducts = (state) => state.products.list;

export const getProductLoading = (state) => state.products.loading



export default productSlice.reducer;

export const {updateAllProducts,fetchProductLists} = productSlice.actions