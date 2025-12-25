// ACTION TYPES
const ADD_TO_CART = "cart/addItem";

const REMOVE_FROM_CART = "cart/removeItem";


const INCREMENT = "cart/increment";

const DECREMENT = "cart/decrement";



// ! ACTION CREATORS

export function addToCart(productID,count=1){
    return {type:ADD_TO_CART,payload:{productID,count}}
}


export function removeFromCart(productID){
    return {type:REMOVE_FROM_CART,payload:{productID}}
}


export function increment(productID){
    return {type:INCREMENT,payload:{productID}}
}

export function decrement(productID){
    return {type:DECREMENT,payload:{productID}}
}


export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
            break;

        case REMOVE_FROM_CART:
            return state.filter((item) => item.productID != action.payload.productID)
            break;

        case INCREMENT:
            return state.map((item) => {
                if (item.productID == action.payload.productID) {
                    return { ...item, count: item.count + 1 }
                }
                return item
            })
            break;


        case DECREMENT:
            return state.map((item) => {
                if (item.productID == action.payload.productID) {
                    return { ...item, count: item.count - 1 }
                }
                return item
            })
            break;

        default:
            return state;
    }
}