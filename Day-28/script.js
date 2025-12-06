import { combineReducers, createStore } from 'redux';
import { products } from './productList';
import productReducr from './productReducer';
import cartReducer, { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from './cartReducer';

const initialState = {
    productList: products,
    cartItem: []
}

const reducer = combineReducers({
    productList:productReducr,
    cartItem:cartReducer
})


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());


store.subscribe(() => {
    console.log(store.getState());
})


// ADD ITEM
store.dispatch(addToCart(1));
store.dispatch(addToCart(2));
store.dispatch(addToCart(3));
store.dispatch(addToCart(4));
store.dispatch(addToCart(5));


// DELETE ITEM
store.dispatch(removeFromCart(2));


// INCREASE QUANTITY 
store.dispatch(increaseQuantity(1));
store.dispatch(increaseQuantity(3));



// DECREASE QUANTITY   
store.dispatch(decreaseQuantity(1));