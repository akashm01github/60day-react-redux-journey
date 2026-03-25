const { createStore, combineReducers } = require("redux");
import cartReducer, { addToCart, ADDTOCART, DECREASE_QUANTITY, decreaseQuantity, INCREASE_QUANTITY, increaseQuantity, REMOVE_FROM_CART, removeFromCart } from './cartReducer';
import { products } from './productList';
import productReducer from './productReducer';


const reducer = combineReducers({
    products:productReducer,
    carts:cartReducer
})


//! STORE 
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());



store.subscribe(() => {
    console.log(store.getState());
})


//! ADD TO CART ITEM 
store.dispatch(addToCart(1));
store.dispatch(addToCart(2,3));
store.dispatch(addToCart(3,2));
store.dispatch(addToCart(4,2));
store.dispatch(addToCart(5));



//! REMOVE FROM CART
store.dispatch(removeFromCart(4));


//! INCREASE QUANTITY 
store.dispatch(increaseQuantity(3));
store.dispatch(increaseQuantity(2));


//! DECREASE QUANTITY 
store.dispatch(decreaseQuantity(3));
store.dispatch(decreaseQuantity(3));
