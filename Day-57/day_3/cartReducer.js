
//! ACTION TYPES 
export const ADD_CART_ITEM = "cart/addCartItem";

export const REMOVE_CART_ITEM = "cart/removeCartItem";

export const INCREASE_QUANTITY = "cart/increaseQuantity";

export const DECREASE_QUANTITY = "cart/decreaseQuantity";



export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_CART_ITEM:
            return [...state, action.payload]
            break;
        case REMOVE_CART_ITEM:
            return state.filter((item) => item.parductId != action.payload.parductId)
            break;

        case INCREASE_QUANTITY:
            return state.map((item) => {
                if (item.parductId == action.payload.parductId) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })

            break;


        case DECREASE_QUANTITY:
            return state.map((item) => {
                if (item.parductId == action.payload.parductId) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            })

            break;

        default:
            return state;
    }
}