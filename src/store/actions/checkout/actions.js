import { commerce } from "../../../lib/commerce";
import * as C from "../../constant";

// actions

export const setCheckout = (checkout) => ({
  type: C.SET_CHECKOUT,
  payload: {
    checkout,
  },
});

// thunks

export const generateCheckoutToken = () => {
  return async (dispatch, getState) => {
    const cartHasItems = getState().cart.line_items.length > 0;

    if (cartHasItems) {
      const checkout = await commerce.checkout.generateTokenFrom(
        "cart",
        commerce.cart.id()
      );
      dispatch(setCheckout(checkout));
    } else {
      const checkout = { products: [] };
      dispatch(setCheckout(checkout));
    }
  };
};
