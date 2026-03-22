//! ACTIONS CREATOR

export const ADDTOCART = "cart/add_to_cart";

export const REMOVE_FROM_CART = "cart/remove_from_cart";

export const INCREASE_QUANTITY = "cart/increase_quantity";

export const DECREASE_QUANTITY = "cart/decrease_quantity";




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