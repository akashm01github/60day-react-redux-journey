import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, createStore } from 'redux'
import productsReducer from './slices/productsSlice'

import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from './slices/cartSlice'
import wishListReducer, {
  addWishListItem,
  removeWishListItem,
} from './slices/wishListSlice'

import logger from './middleware/logger'




export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  middleware:(getDeafultValue)=>getDeafultValue().concat(logger)
})




