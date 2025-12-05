import { combineReducers, createStore } from 'redux'

import { products } from "./productList";
import productReducer from './../Day-25/productsReducer';
import cartReducer from './cartReducer';

const initialState = {
    product: products,
    cartItem: []
}


const reducer = combineReducers({
    product:productReducer,
    cartItem:cartReducer
})


const store = createStore(reducer);


store.subscribe(() => {
    console.log(store.getState());
})


// ADD TO CART
store.dispatch({ type: "addToCart", payload: { productId: 1, count: 1 } });
store.dispatch({ type: "addToCart", payload: { productId: 2, count: 1 } });
store.dispatch({ type: "addToCart", payload: { productId: 3, count: 1 } });
store.dispatch({ type: "addToCart", payload: { productId: 4, count: 1 } });


// REMOVE FROM CART
store.dispatch({ type: "removeToCart", payload: { productId: 3} });




// ADD PRODUCT COUNT 
store.dispatch({ type: "increaseCount", payload: { productId: 4} });
store.dispatch({ type: "increaseCount", payload: { productId: 1} });


// ADD PRODUCT COUNT 
store.dispatch({ type: "decreaseCount", payload: { productId: 1} });