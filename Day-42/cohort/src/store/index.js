import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, createStore } from 'redux'
import productsReducer from './slices/productsSlice'

// import {produce} from 'immer'

import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from './slices/cartSlice'
import wishListReducer, {
  addWishListItem,
  removeWishListItem,
} from './slices/wishListSlice'


// const reducer = combineReducers({
//   products: productsReducer,
//   cartItems: cartReducer,
//   wishList: wishListReducer,
// })

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  }
})


