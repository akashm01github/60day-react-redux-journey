const { createStore, combineReducers } = require("redux");
import cartReducer, { ADDTOCART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from './cartReducer';
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
store.dispatch({ type: ADDTOCART, payload: { productId: 1, quantity: 1 } });
store.dispatch({ type: ADDTOCART, payload: { productId: 2, quantity: 1 } });
store.dispatch({ type: ADDTOCART, payload: { productId: 3, quantity: 1 } });
store.dispatch({ type: ADDTOCART, payload: { productId: 4, quantity: 1 } });



//! REMOVE FROM CART
store.dispatch({ type: REMOVE_FROM_CART, payload: { productId: 4 } });


//! INCREASE QUANTITY 
store.dispatch({ type: INCREASE_QUANTITY, payload: { productId: 3 } });


//! DECREASE QUANTITY 
store.dispatch({ type: DECREASE_QUANTITY, payload: { productId: 3 } });
