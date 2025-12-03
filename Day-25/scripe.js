import { combineReducers, createStore } from 'redux';
import { products } from './productList';
import productReducer from './productsReducer';
import cartReducer from './cartReducer';



const initialState = {
    porduct: products,
    cart: [],
    wishList: []
}


let reducer = combineReducers({
    porduct:productReducer,
    cart:cartReducer
})


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
})



// ADD TO CART 

store.dispatch({ type: "addtocart", payload: { productId: 1, quantity: 1 } });
store.dispatch({ type: "addtocart", payload: { productId: 2, quantity: 1 } });
store.dispatch({ type: "addtocart", payload: { productId: 3, quantity: 1 } });
store.dispatch({ type: "addtocart", payload: { productId: 4, quantity: 1 } });


// REMOVE FROM CART

store.dispatch({ type: "removeItem", payload: { productId: 3 } });


// INCREASE ITEM QUANTITY

store.dispatch({ type: "increseQuantity", payload: { productId: 2 } });

store.dispatch({ type: "decreseQuantity", payload: { productId: 4 } });