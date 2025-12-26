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

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)



// IMMER JS 
const users = [
  {
    name:"Akash",
    age:24
  },
  {
    name:"Ram",
    age:30
  },
  {
    name:"Aman",
    age:18
  }
]

// const newUser = users.map((user,i)=>{
//   if(i==2){
//     return {...user,age:20}
//   }
//   return user
// })

// console.log(newUser)

// const newUser = produce(users,(usersCopy)=>{
//     usersCopy[1].age = 400
// })

// console.log(newUser)