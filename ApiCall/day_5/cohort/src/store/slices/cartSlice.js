import { createSlice } from "@reduxjs/toolkit"

const findIndex = (state, action) => state.findIndex((cartItem) => cartItem.productId === action.payload.productId);

const slice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    list: [],
    error: ''
  },
  reducers: {
    fetchCartItems: (state, action) => {
      state.loading = true
    },
    fetchCartItemsError: (state, action) => {
      state.loading = true
      state.error = action.payload || 'Something Went Wrong......'
    },
    loadCartItems: (state, action) => {
      state.list = action.payload.products;
      state.loading = false
    },
    addCartItem: (state, action) => {
      const existingCartItemIndex = findIndex(state.list, action);
      if (existingCartItemIndex != -1) {
        state.list[existingCartItemIndex].quantity += 1;
      }
      else {
        state.list.push({ ...action.payload, quantity: 1 })
      }
    },
    removeCartItem: (state, action) => {
      const existingCartItemIndex = findIndex(state.list, action);
      state.list.splice(existingCartItemIndex, 1);
    },
    decreaseCartItemQuantity: (state, action) => {
      const existingCartItemIndex = findIndex(state.list, action);
      state.list[existingCartItemIndex].quantity -= 1;
      if (state.list[existingCartItemIndex].quantity == 0) {
        state.list.splice(existingCartItemIndex, 1);
      }
    },
    increaseCartItemQuantity: (state, action) => {
      const existingCartItemIndex = findIndex(state.list, action);
      state.list[existingCartItemIndex].quantity += 1;
    },
  }
})

export default slice.reducer;
export const { addCartItem, removeCartItem, 
  increaseCartItemQuantity, decreaseCartItemQuantity, 
  loadCartItems, fetchCartItems, fetchCartItemsError } = slice.actions