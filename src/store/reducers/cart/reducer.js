// cart reducer
import * as C from "../../constant";

const initialState = {
  line_items: "initial",
  id: "cart_J5a96O62PE0r75",
  total_items: 0,
  total_unique_items: 0,
  subtotal: {},
};

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_CART:
      return {
        ...payload.cart,
      };

    case C.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        ...payload.cart,
      };

    case C.UPDATE_PRODUCT_QTY:
      return {
        ...state,
        line_items: [...payload.cart.line_items],
        total_items: payload.cart.total_items,
        subtotal: { ...payload.cart.subtotal },
      };

    case C.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        line_items: [...payload.cart.line_items],
        total_items: payload.cart.total_items,
        subtotal: { ...payload.cart.subtotal },
      };

    default:
      return state;
  }
};
