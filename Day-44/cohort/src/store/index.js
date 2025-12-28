import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './slice/productsSlice'

import cartReducer from './slice/cartSlice'


import wishListReducer from './slice/wishListSlice'



export const store = configureStore({ reducer:{
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
}})
