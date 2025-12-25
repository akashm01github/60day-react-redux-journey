import { products } from "./productList";
import { combineReducers, createStore } from 'redux';
import productReducer from "./reducer/producReducer";
import cartReducer, { addToCart, decrement, increment, removeFromCart } from "./reducer/cartReducer";

const initialState = {
    productList: products,
    cartItem:[]
}


// REDUCER
const reducer = combineReducers({
    productList:productReducer,
    cartItem:cartReducer
})

export const store  = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.subscribe(()=>{
    console.log(store.getState());
})


