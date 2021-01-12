import { generalActions } from "..";
import { commerce } from "../../../lib/commerce";
import * as C from "../../constant";

// actions

export const setCart = (cart) => ({
  type: C.SET_CART,
  payload: { cart },
});

export const addProductToCart = (cart) => ({
  type: C.ADD_PRODUCT_TO_CART,
  payload: { cart },
});

export const updateProductQty = (cart) => ({
  type: C.UPDATE_PRODUCT_QTY,
  payload: { cart },
});

export const removeProductFromCart = (cart) => ({
  type: C.REMOVE_PRODUCT_FROM_CART,
  payload: { cart },
});

// thunks

export const fetchCartAsync = () => {
  return async (dispatch) => {
    try {
      const cart = await commerce.cart.retrieve();
      const ourCart = {
        id: cart.id,
        line_items: [...cart.line_items],
        total_items: cart.total_items,
        total_unique_items: cart.total_unique_items,
        subtotal: { ...cart.subtotal },
      };
      dispatch(setCart(ourCart));
    } catch (error) {
      throw error;
    }
  };
};

export const refreshCartAsync = () => {
  return async (dispatch) => {
    try {
      const cart = await commerce.cart.refresh();
      const ourCart = {
        id: cart.id,
        line_items: [...cart.line_items],
        total_items: cart.total_items,
        total_unique_items: cart.total_unique_items,
        subtotal: { ...cart.subtotal },
      };
      dispatch(setCart(ourCart));
    } catch (error) {
      throw error;
    }
  };
};

export const addProductToCartAsync = (id, quantity = 1, variant) => {
  return async (dispatch) => {
    try {
      const res = await commerce.cart.add(id, quantity, variant);
      const ourCart = {
        id: res.cart.id,
        line_items: [...res.cart.line_items],
        total_items: res.cart.total_items,
        total_unique_items: res.cart.total_unique_items,
        subtotal: { ...res.cart.subtotal },
      };
      dispatch(addProductToCart(ourCart));
    } catch (error) {
      console.log(error);
      dispatch(generalActions.changeErrorsCount());
      throw error;
    }
  };
};

export const updateProductQtyAsync = (productId, quantity) => {
  return async (dispatch) => {
    try {
      const { cart } = await commerce.cart.update(productId, { quantity });
      const ourCart = {
        id: cart.id,
        line_items: [...cart.line_items],
        total_items: cart.total_items,
        total_unique_items: cart.total_unique_items,
        subtotal: { ...cart.subtotal },
      };
      dispatch(updateProductQty(ourCart));
    } catch (error) {
      throw error;
    }
  };
};

export const removeProductFromCartAsync = (productId) => {
  return async (dispatch) => {
    try {
      const { cart } = await commerce.cart.remove(productId);
      const ourCart = {
        id: cart.id,
        line_items: [...cart.line_items],
        total_items: cart.total_items,
        total_unique_items: cart.total_unique_items,
        subtotal: { ...cart.subtotal },
      };
      dispatch(removeProductFromCart(ourCart));
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
