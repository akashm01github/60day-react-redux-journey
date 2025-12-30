import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './slice/productsSlice'

import cartReducer from './slice/cartSlice'


import wishListReducer from './slice/wishListSlice'
import { apiMiddleWare } from './middleware/api'
import { func } from './middleware/func'



export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },

  middleware: (getDefaultValue)=>getDefaultValue().concat(apiMiddleWare,func)
})
