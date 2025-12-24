// PACKAGES
import { combineReducers, createStore } from 'redux';
import cartReducer from './reducer/cartReducer';
import { products } from './productList';
import productReducer from './reducer/productReducer';


// INITIAL STATE
const initialState = {
    product: products,
    cartList: [],
    wishList: []
}
// console.log(initialState);
// ACTION TYPES

const ADD_TO_CART = "cart/addItem";

const REMOVE_FROM_CART = "cart/removeItem";

const INCREASE_QUANTITY = "cart/increaseCount";

const DECREASE_QUANTITY = "cart/decreaseCount";



const reducer = combineReducers({
    product:productReducer,
    cartList:cartReducer
})



// STORE
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())


store.subscribe(() => [
    console.log(store.getState())
])


//! ACTIONS
// ADD TO CART
store.dispatch({ type: ADD_TO_CART, payload: { id: 1, count: 1 } })
store.dispatch({ type: ADD_TO_CART, payload: { id: 2, count: 1 } })
store.dispatch({ type: ADD_TO_CART, payload: { id: 3, count: 1 } })
store.dispatch({ type: ADD_TO_CART, payload: { id: 4, count: 1 } })

// REMOVE FROM CART
store.dispatch({ type: REMOVE_FROM_CART, payload: { id: 3 } })


//! INCREASE QUANTITY
store.dispatch({ type: INCREASE_QUANTITY, payload: { id: 4 } });


// ! DECREASE QUANTITY
store.dispatch({ type: DECREASE_QUANTITY, payload: { id: 1 } });
