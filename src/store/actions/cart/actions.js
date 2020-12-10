import { commerce } from "../../../lib/commerce";
import * as C from "../../constant";

// actions

export const setCart = (cart) => ({
  type: C.SET_CART,
  payload: { cart },
});

// thunks

export const fetchCartAsync = () => {
  return async (dispatch) => {
    try {
      const cart = await commerce.cart.retrieve();
      dispatch(setCart(cart));
    } catch (error) {
      throw error;
    }
  };
};

export const addProductToCartAsync = (productId) => {
  return async (dispatch) => {
    try {
      const { cart } = await commerce.cart.add(productId);
      dispatch(setCart(cart));
    } catch (error) {
      throw error;
    }
  };
};

export const updateProductQtyAsync = (productId, quantity) => {
  return async (dispatch) => {
    try {
      const { cart } = await commerce.cart.update(productId, { quantity });
      dispatch(setCart(cart));
    } catch (error) {
      throw error;
    }
  };
};

export const removeProductFromCartAsync = (productId) => {
  return async (dispatch) => {
    try {
      const { cart } = await commerce.cart.remove(productId);
      dispatch(setCart(cart));
    } catch (error) {
      throw error;
    }
  };
};

export const emptyCartAsync = () => {
  return async (dispatch) => {
    try {
      const { cart } = await commerce.cart.empty();
      dispatch(setCart(cart));
    } catch (error) {
      throw error;
    }
  };
};
