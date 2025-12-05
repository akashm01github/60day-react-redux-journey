// PRODUCT REDUCER  
export default function cartReducer(state = [], action) {
    switch (action.type) {
        case "addToCart":
            return [ ...state, action.payload ]
            break;
        case "removeToCart":
            return state.filter((item)=>item.productId != action.payload.productId)
            break;
        case "increaseCount":
            return state.map((item)=>{
                if(item.productId == action.payload.productId){
                    return {...item, count:item.count+10}
                }
                return item;
            })
            break;
        case "decreaseCount":
            return state.map((item)=>{
                if(item.productId == action.payload.productId){
                    return {...item, count:item.count-1}
                }
                return item;
            })
            break;

        default:
            return state
    }
}