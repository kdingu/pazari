// cart reducer
import * as C from "../../constant";

const initialState = {
  id: "cart_J5a96O62PE0r75",
  total_items: 0,
  total_unique_items: 0,
  subtotal: {},
  line_items: [],
};

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_CART:
      return { ...state, ...payload.cart };

    default:
      return state;
  }
};
