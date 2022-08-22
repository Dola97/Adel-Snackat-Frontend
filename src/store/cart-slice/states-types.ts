interface cartState {
  line_items: {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }[];
}

export const initialState: cartState = {
  line_items: [],
};
