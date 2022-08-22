import { RootState } from "../store";
export const selectCart = (state: RootState) => state.cartv1.line_items;
