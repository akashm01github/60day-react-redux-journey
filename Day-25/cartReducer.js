

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case "addtocart":
            return [...state, action.payload]


        case "removeItem":
            return state.filter((item) => item.productId != action.payload.productId)


        case "increseQuantity":
            return state.map((item) => {
                if (item.productId == action.payload.productId) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })


        case "decreseQuantity":
            return state.map((item) => {
                if (item.productId == action.payload.productId) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })




        default:
            return state;
    }
}


