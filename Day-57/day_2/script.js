import { createStore } from 'redux'
import { products } from './productList'

console.log(products)

const initialState = {
    products: products,
    cartItems: [],
    wishList: []
}


const CART_ADD_ITEM = 'cart/AddItem';
const CART_REMOVE_ITEM = 'cart/RemoveItem';

const CART_INCREASE_QUANTITY = 'cart/increase_quantity';
const CART_DECREASE_QUANTITY = 'cart/decrease_quantity';



function reducer(state = initialState, action) {
    if (action.type == CART_ADD_ITEM) {
        return { ...state, cartItems: [...state.cartItems, action.payload] }
    }
    else if (action.type == CART_REMOVE_ITEM) {
        return { ...state, cartItems: state.cartItems.filter((item) => item.productId !== action.payload.productId) }
    }
    else if (action.type == CART_INCREASE_QUANTITY) {
        return {
            ...state, cartItems: state.cartItems.map((cartItem) => {
                if (cartItem.productId == action.payload.productId) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
            })
        }
    }

    else if (action.type == CART_DECREASE_QUANTITY) {
        return {
            ...state, cartItems: state.cartItems.map((cartItem) => {
                if (cartItem.productId == action.payload.productId) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 }
                }
                return cartItem
            })
        }
    }
    else {
        return state
    }
}


//! STORE 
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());


store.subscribe(() => {
    console.log(store.getState())
})


//! ADD ITEM 
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 2, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 4, quantity: 1 } });


//! REMOVE ITEM 
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 4 } });


//! INCREASE QUANTITY 
store.dispatch({ type: CART_INCREASE_QUANTITY, payload: { productId: 2 } });
store.dispatch({ type: CART_INCREASE_QUANTITY, payload: { productId: 2 } });
store.dispatch({ type: CART_INCREASE_QUANTITY, payload: { productId: 2 } });
store.dispatch({ type: CART_INCREASE_QUANTITY, payload: { productId: 2 } });
store.dispatch({ type: CART_INCREASE_QUANTITY, payload: { productId: 1 } });


//! DECREASE QUANTITY 
store.dispatch({ type: CART_DECREASE_QUANTITY, payload: { productId: 2 } });








