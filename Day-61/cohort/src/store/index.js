import { configureStore } from '@reduxjs/toolkit';

//! SLICE
import cartReducer from './slices/cartSlice'
import wishListReducer from './slices/wishListSlice'
import productsReducer from './slices/productSlice';
import { logger } from './middleware/logger';






export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger) // ✅ callback
})




