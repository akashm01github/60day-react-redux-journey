import { combineReducers, createStore } from 'redux'
import productsReducer from './productsReducer'
// import { produce } from 'immer';



import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from './cartReducer'
import wishListReducer, {
  addWishListItem,
  removeWishListItem,
} from './wishListReducer'

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)




// const newUsers = users.map((user,i)=>{
//     if(i==1){
//       return {...user,age:20}
//     }
//     return user;
// })

// console.log(newUsers)
// console.log(users)


// const newUser = produce(users,(userCopy)=>{
//     userCopy.push({userName:"Apple",age:10});
// })

// console.log(newUser);

// console.log(users)


