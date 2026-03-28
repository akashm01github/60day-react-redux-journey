import { combineReducers, createStore } from 'redux'
import cartReducer from './slices/cartSlice'
import wishListReducer from './slices/wishListSlice'
import productsReducer from './slices/productSlice';
import { produce } from 'immer';

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)



//----------------------------------------------------------------------

const users = [
  {
    "name": "Akash",
    "age": 25
  },
  {
    "name": "John",
    "age": 10
  },
  {
    "name": "Aparna",
    "age": 38
  },

]


// users[1].age = 20

// const newUser= users.map((user,i)=>{
//   if(i === 1){
//     return {...user, age:30}
//   }
//   return user
// })


// console.log(newUser)


//! USING PRODUCE METHOD 

const updatedUser = produce(users, (copyUser) => {
  copyUser[1].age = 40;
})

console.log(users)
console.log(updatedUser)


