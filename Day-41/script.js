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

const store  = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.subscribe(()=>{
    console.log(store.getState());
})


//! ACTION


// ADD TO CART
store.dispatch(addToCart(1));
store.dispatch(addToCart(2));
store.dispatch(addToCart(3));
store.dispatch(addToCart(4));
store.dispatch(addToCart(5));
store.dispatch(addToCart(6));
store.dispatch(addToCart(7));


// REMOVE FROM CART
store.dispatch(removeFromCart(4))


// INCREMENT

store.dispatch(increment(7));
store.dispatch(increment(6));


// DECREMENT
store.dispatch(decrement(3));

