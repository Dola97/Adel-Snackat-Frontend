import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./states-types";

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: () => initialState,
  },
});

export default cartSlice.reducer;
