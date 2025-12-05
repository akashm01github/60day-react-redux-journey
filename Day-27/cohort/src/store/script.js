import { combineReducers, createStore } from 'redux'

import { products } from "./productList";
import productReducer from './productReducer'
import cartReducer, { addToCart, increaseCartItemQuantity } from './cartReducer';
import {decreaseCartItemQuantity} from './cartReducer';


const initialState = {
    product: products,
    cartItem: []
}


const reducer = combineReducers({
    product:productReducer,
    cartItem:cartReducer
})


export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());


store.subscribe(() => {
    console.log(store.getState());
})


// ADD TO CART
store.dispatch(addToCart(1));
store.dispatch(addToCart(2));
store.dispatch(addToCart(3));
store.dispatch(addToCart(4));
store.dispatch(addToCart(5));

store.dispatch(addToCart(20,5));

// REMOVE FROM CART
store.dispatch({ type: "removeToCart", payload: { productId: 3} });




// ADD PRODUCT COUNT 
store.dispatch(increaseCartItemQuantity(4));
store.dispatch(increaseCartItemQuantity(70));


// ADD PRODUCT COUNT 
store.dispatch(decreaseCartItemQuantity(4));
