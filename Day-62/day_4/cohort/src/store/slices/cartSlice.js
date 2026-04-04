import { createSlice } from "@reduxjs/toolkit"
import { produce } from "immer"

//! USING CREATE SLICE

const findIndex = (state, action) => state.findIndex((cartItem) => cartItem.productId == action.payload.productId);

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      const existingCartItemIndex = findIndex(state, action);

      if (existingCartItemIndex !== -1) {
        state[existingCartItemIndex].quantity += 1;
      }
      else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    removeCartItem(state, action) {
      const existingCartItemIndex = findIndex(state, action);
      state.splice(existingCartItemIndex, 1)
    },
    increaseCartItemQuantity(state, action) {
      const existingCartItemIndex = findIndex(state, action);
      console.log(existingCartItemIndex, action.payload);

      state[existingCartItemIndex].quantity += 1;
    },
    decreaseCartItemQuantity(state, action) {
      const existingCartItemIndex = findIndex(state, action);
      state[existingCartItemIndex].quantity -= 1;

      if (state[existingCartItemIndex].quantity == 0) {
        state.splice(existingCartItemIndex, 1);
      }
    }

  }
})

export default slice.reducer;

export const { addCartItem, removeCartItem, increaseCartItemQuantity, decreaseCartItemQuantity } = slice.actions