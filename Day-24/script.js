import { createStore } from 'redux';
import { porductsList } from './productList';


const initialState = {
    products: porductsList,
    cartItem: [],
    wishList: []
}


const CART_ADD_ITEM = "cart/addItem";

const CART_REMOVE_ITEM = "cart/removeItem";

const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";

const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

// REDUCER
function reducer(state = initialState, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            return { ...state, cartItem: [...state.cartItem, action.payload] }

        case CART_REMOVE_ITEM:
            return { ...state, cartItem: state.cartItem.filter((item) => item.productId != action.payload.productId) }

        case CART_INCREASE_ITEM_QUANTITY:
            return {
                ...state, cartItem:state.cartItem.map((item)=>{
                    if(item.productId == action.payload.productId){
                        return {...item,quantity:item.quantity+1}
                    }
                    return cartItem
                })
            }

        case CART_DECREASE_ITEM_QUANTITY:
            return {
                ...state, cartItem:state.cartItem.map((item)=>{
                    if(item.productId == action.payload.productId){
                        return {...item,quantity:item.quantity - 1}
                    }
                    return cartItem
                })
            }
        default:
            return state
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 3 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 12, quantity: 4 } })


store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 12 } })


store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: { productId: 1 } })


store.dispatch({ type: CART_DECREASE_ITEM_QUANTITY, payload: { productId: 1 } })