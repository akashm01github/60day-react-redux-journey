// Action Types
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';


const findItemIndex = (state, action) => state.findIndex((item) => item.productId == action.payload.productId)


// !  CREATE ASYNC THUNK 
export const fetchAllCartItemsData = createAsyncThunk('cart/fetchCartItems',async ()=>{
    const data = await fetch(`https://fakestoreapi.com/carts/5`);
    const productsList = await data.json();
    return productsList;
})

// console.dir(fetchAllCartItemsData)

const slice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    loading: false
  },
  reducers: {

    // loadCartItems(state, action) {
    //   state.list = action.payload.products;
    //   state.loading = false
    // },

    // fetchCartLists(state, action) {
    //   state.loading = true
    // },


    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);

      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1
      }
      else {
        state.list.push({ ...action.payload, quantity: 1 })
      }
    },

    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      state.list.splice(existingItemIndex, 1);
    },

    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      state.list[existingItemIndex].quantity += 1
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      state.list[existingItemIndex].quantity -= 1
      if (state.list[existingItemIndex].quantity == 0) {
        state.list.splice(existingItemIndex, 1);
      }
    }
  },
  extraReducers:(builder)=>{
      builder.addCase(fetchAllCartItemsData.pending,(state,action)=>{
        state.loading = true
      }).addCase(fetchAllCartItemsData.fulfilled,(state,action)=>{
        state.loading = false;
        state.list = action.payload.products
      }).addCase(fetchAllCartItemsData.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload || "Something Went Wrong"
      })
  }
})




export const getAllCart = ({ products, cartItems}) => {
  return cartItems.list.map(({ productId, quantity }) => {
    const cartProduct = products.list.find((product) => product.id == productId)
    return { ...cartProduct, quantity }
  })
}



// SELECTOR
const selectCartList = (state) => state.cartItems.list;

const selectProductList = (state) => state.products.list;

export const getAllCartItems = createSelector(
  [selectCartList, selectProductList],
  (cartList, productList) => {
    return cartList.map(({ productId, quantity }) => {
      const cartProduct = productList.find((product) => product.id == productId);

      return { ...cartProduct, quantity }
    })
  }
)



export const getCartLoading = (state) => state.cartItems.loading;


//! ASYNC THUNK 
// export const fetchAllCartItemsData =()=> (dispatch) => {
//   const fetchAllData = async () => {
//     dispatch(fetchCartLists())
//     const data = await fetch(`https://fakestoreapi.com/carts/5`);
//     const productsList = await data.json();
//     dispatch(loadCartItems(productsList))

//   }
//   fetchAllData()
// }





export default slice.reducer;

export const {addCartItem, removeCartItem, increaseCartItemQuantity, decreaseCartItemQuantity } = slice.actions;
