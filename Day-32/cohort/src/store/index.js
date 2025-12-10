import { configureStore } from '@reduxjs/toolkit'


import productsReducer from './productsReducer'
import cartReducer from './cartReducer'
import wishListReducer from './wishListReducer'

// MIDDLEWARE
// import { logger } from './middleware/logger'




// function logger(store) {
//   return function (next) {
//     return function (action) {
//       console.log(store)
//       console.log(next)
//       console.log(action)
//       next(action)
//     }
//   }
// }


// CLEAN WAY
// const logger  = (store)=>(next)=>(action)=>{
//   console.log(store)
//       console.log(next)
//       console.log(action)
//       next(action)
// }







export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer
  },
  // middleware: (getDefaultMiddleWare)=> getDefaultMiddleWare().concat(logger),

})


