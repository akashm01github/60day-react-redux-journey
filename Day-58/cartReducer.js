//! ACTIONS TYPES 

const ADDTOCART = "cart/add_to_cart";

const REMOVE_FROM_CART = "cart/remove_from_cart";

const INCREASE_QUANTITY = "cart/increase_quantity";

const DECREASE_QUANTITY = "cart/decrease_quantity";



//! ACTION CREATORS

//todo : DECREASE QUANTITY 
export function decreaseQuantity(productId) {
    return { type: DECREASE_QUANTITY, payload: { productId } }
}


//todo : INCREASE QUANTITY      
export function increaseQuantity(productId) {
    return { type: INCREASE_QUANTITY, payload: { productId } }
}


//todo: ADD TO CART ITEM 
export function addToCart(productId, quantity = 1) {
    return { type: ADDTOCART, payload: { productId, quantity } }
}


//todo: REMOVE FROM CART ITEM 
export function removeFromCart(productId) {
    return { type: REMOVE_FROM_CART, payload: { productId} }
}



//! REDUCER FUNCTION
export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ADDTOCART:
            return [...state, action.payload]
            break
        case REMOVE_FROM_CART:
            return state.filter((cartItem) => cartItem.productId != action.payload.productId)
            break

        case INCREASE_QUANTITY:
            return state.map((cartItem) => {
                if (cartItem.productId == action.payload.productId) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem;
            })

            break

        case DECREASE_QUANTITY:
            return state.map((cartItem) => {
                if (cartItem.productId == action.payload.productId) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 }
                }
                return cartItem;
            })
            break
        default:
            return state
    }
}