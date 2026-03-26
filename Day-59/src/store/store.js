import { combineReducers, createStore } from "redux";
import { products } from "./productList";

import productReducer from "./productReducer";
import cartReducer, { addTocart, decreaseQuantity, increaseQuantity, removeFromCart } from "./cartReducer";


// const initialState = {
//     products: products,
//     carts: []
// }

const reducer = combineReducers({
    products:productReducer,
    carts:cartReducer
})


//! STORE
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());


