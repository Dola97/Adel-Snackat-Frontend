import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./states-types";
import tron from "reactotron-react-native";
export const cartSlice = createSlice({
  name: "cartv1",
  initialState,
  reducers: {
    clearCart: () => initialState,
    addToCart: (state, action) => {
      const itemInCart = state.line_items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.line_items.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item: any = state.line_items.find(
        (item) => item.id === action.payload
      );
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      let index = state.line_items.findIndex(
        (i: any) => i.id === action.payload
      );
      if (state.line_items[index]?.quantity === 1) {
        state.line_items.splice(index, 1);
      } else {
        state.line_items[index] = {
          ...state.line_items[index],
          quantity: state.line_items[index]?.quantity - 1,
        };
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.line_items.filter(
        (item) => item.id !== action.payload
      );
      state.line_items = removeItem;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
