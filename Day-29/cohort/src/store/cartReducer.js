
const ADD_TO_CART = "cart/addItem";

const REMOVE_FROM_CART = "cart/removeItem";

const INCREASE_QUANTITY = "cart/increaseQuantity";


const DECREASE_QUANTITY = "cart/decreaseQuantity";





// ACTIONS CREATORS
export function addToCart(productId, count = 1) {
    return {
        type: ADD_TO_CART,
        payload: { productId, count: 1 }
    }
}


// ACTIONS CREATORS
export function removeFromCart(productId, count = 1) {
    return {
        type: REMOVE_FROM_CART,
        payload: { productId, count: 1 }
    }
}


// ACTIONS CREATORS
export function increaseQuantity(productId) {
    return {
        type: INCREASE_QUANTITY,
        payload: { productId}
    }
}


// ACTIONS CREATORS
export function decreaseQuantity(productId) {
    return {
        type: DECREASE_QUANTITY,
        payload: { productId}
    }
}






export default function cartReducer(state = [], action) {
    switch (action.type) {

        case ADD_TO_CART:
            return [...state, action.payload]
            break;


        case REMOVE_FROM_CART:
            return state.filter((item) => item.productId != action.payload.productId)
            break;

        case INCREASE_QUANTITY:
            return state.map((item) => {
                if (item.productId == action.payload.productId) {
                    return { ...item, count: item.count + 10 }
                }
                return item;
            })
            break;


        case DECREASE_QUANTITY:
            return state.map((item) => {
                if (item.productId == action.payload.productId) {
                    return { ...item, count: item.count - 2 }
                }
                return item;
            })

            break;


        default:
            return state
            break;
    }
}