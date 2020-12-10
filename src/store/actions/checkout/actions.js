import * as C from "../../constant";

export const generateCheckoutToken = (cartId) => {
  return async (dispatch) => {
    return {
      type: C.GENERATE_CHECKOUT_TOKEN,
      payload: {
        cartId,
      },
    };
  };
};
