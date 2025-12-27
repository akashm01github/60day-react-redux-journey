// import { produce } from 'immer';
import { createSlice } from '@reduxjs/toolkit';


//! Action Types
// export const CART_ADD_ITEM = 'cart/addItem'
// const CART_REMOVE_ITEM = 'cart/removeItem'
// const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
// const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'



//! Action Creators
// export function addCartItem(productData) {
//   return { type: CART_ADD_ITEM, payload: productData }
// }

// export function removeCartItem(productId) {
//   return { type: CART_REMOVE_ITEM, payload: { productId } }
// }

// export function decreaseCartItemQuantity(productId) {
//   return {
//     type: CART_ITEM_DECREASE_QUANTITY,
//     payload: { productId },
//   }
// }

// export function increaseCartItemQuantity(productId) {
//   return {
//     type: CART_ITEM_INCREASE_QUANTITY,
//     payload: { productId },
//   }
// }

//! Reducer
// export default function cartReducer(originalState = [], action) {
//   return produce(originalState, (state) => {

//     const existingItemIndex = state.findIndex(
//       (cartItem) => cartItem.productId === action.payload.productId
//     )


//     switch (action.type) {

//       case CART_ADD_ITEM:

//         if (existingItemIndex !== -1) {
//           state[existingItemIndex].quantity += 1;
//           return state;
//         }
//         state.push({ ...action.payload, quantity: 1 })
//         return state;


//       case CART_REMOVE_ITEM:
//         state.splice(existingItemIndex, 1);
//         return state;


//       case CART_ITEM_INCREASE_QUANTITY:
//         state[existingItemIndex].quantity += 1;
//         return state;

//       case CART_ITEM_DECREASE_QUANTITY:
//         state[existingItemIndex].quantity -= 1;
//         if (state[existingItemIndex].quantity == 0) {
//           state.splice(existingItemIndex, 1);
//         }
//         return state;
//       default:
//         return state
//     }
//   })
// }


const findItemIndex = (state,action) => state.findIndex((item) => item.productId == action.payload.productId)

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state,action)
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
        return state;
      }
      else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },

    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state,action)
      state.splice(existingItemIndex, 1);
      return state;
    },

    increaseCartItemQuantity(state, action) {
     const existingItemIndex = findItemIndex(state,action)
      state[existingItemIndex].quantity += 1;
    },

    decreaseCartItemQuantity(state, action) {
    const existingItemIndex = findItemIndex(state,action)
      state[existingItemIndex].quantity -= 1;
      if (state[existingItemIndex].quantity == 0) {
        state.splice(existingItemIndex, 1);
      }
    }

  }
})

export default slice.reducer;

export const { addCartItem, removeCartItem, increaseCartItemQuantity, decreaseCartItemQuantity } = slice.actions