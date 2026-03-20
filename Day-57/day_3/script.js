const { createStore, combineReducers } = require("redux");
import productReducer from './productReducer';
const { default: cartReducer, ADD_CART_ITEM, REMOVE_CART_ITEM, INCREASE_QUANTITY, DECREASE_QUANTITY } = require("./cartReducer");

const reducer = combineReducers({
    products:productReducer,
    cart:cartReducer
})

//! STORE 
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());


store.subscribe(() => {
    console.log(store.getState())
})


//! ADD TO CART 
store.dispatch({ type: ADD_CART_ITEM, payload: { parductId: 1, quantity: 1 } })
store.dispatch({ type: ADD_CART_ITEM, payload: { parductId: 2, quantity: 1 } })
store.dispatch({ type: ADD_CART_ITEM, payload: { parductId: 3, quantity: 1 } })
store.dispatch({ type: ADD_CART_ITEM, payload: { parductId: 4, quantity: 1 } })


//! REMOVE FROM CART
store.dispatch({ type: REMOVE_CART_ITEM, payload: { parductId: 1 } });


//! INCREASE QUANTITY 
store.dispatch({ type: INCREASE_QUANTITY, payload: { parductId: 2 } });


//! DECREASE QUANTITY
store.dispatch({ type: DECREASE_QUANTITY, payload: { parductId: 2 } });


