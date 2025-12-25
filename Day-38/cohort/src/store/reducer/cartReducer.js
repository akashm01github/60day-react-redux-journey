// ACTION TYPES
const ADD_TO_CART = "cart/addItem";

const REMOVE_FROM_CART = "cart/removeItem";


const INCREMENT = "cart/increment";

const DECREMENT = "cart/decrement";



// ! ACTION CREATORS

export function addToCart(productData,id){
    return {type:ADD_TO_CART,payload:{productData,id}}
}


export function removeFromCart(id){
    return {type:REMOVE_FROM_CART,payload:{id}}
}


export function increment(id){
    return {type:INCREMENT,payload:{id}}
}

export function decrement(id){
    return {type:DECREMENT,payload:{id}}
}


export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.find((item)=>item.id == action.payload.id);

            if(existingItem){
                return state.map((item)=>{
                    if(item.id == existingItem.id){
                        return {...item, count:item.count+1}
                    }
                    return item;
                })
            }
            return [...state, {...action.payload,count:1}]
            break;

        case REMOVE_FROM_CART:
            return state.filter((item) => item.id != action.payload.id)
            break;

        case INCREMENT:
            return state.map((item) => {
                if (item.id == action.payload.id) {
                    return { ...item, count: item.count + 1 }
                }
                return item
            })
            break;


        case DECREMENT:
            return state.map((item) => {
                if (item.id == action.payload.id) {
                    return { ...item, count: item.count - 1 }
                }
                return item
            })
            .filter((cartItem) => cartItem.count > 0)
            break;

        default:
            return state;
    }
}