
// ACTION TYPES

const ADD_TO_CART = "cart/addItem";

const REMOVE_FROM_CART = "cart/removeItem";

const INCREASE_QUANTITY = "cart/increaseCount";

const DECREASE_QUANTITY = "cart/decreaseCount";



export default function cartReducer(state=[],action){
     switch (action.type) {
        case ADD_TO_CART:
            return [...state,action.payload]
            break;

        case REMOVE_FROM_CART:
            return state.filter((item) => item.id != action.payload.id)
            break;

        case INCREASE_QUANTITY:
            return state.map((item) => {
                    if (item.id == action.payload.id) {
                        return { ...item, count: item.count + 1 }
                    }
                    return item
                })
            break;

        case DECREASE_QUANTITY:
            return state.map((item) => {
                    if (item.id == action.payload.id) {
                        return { ...item, count: item.count - 1 }
                    }
                    return item
                })
            break;

        default:
            return state;
    }
}