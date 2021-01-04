import cloneDeep from "lodash.clonedeep";
import { commerce } from "../../../lib/commerce";
import * as C from "../../constant";

// actions

export const openDrawer = () => ({
  type: C.OPEN_DRAWER,
});

export const closeDrawer = () => ({
  type: C.CLOSE_DRAWER,
});

export const setProductInDrawer = (product) => {
  return { type: C.SET_PRODUCT_IN_DRAWER, payload: { product } };
};

export const setProducts = ({ data, meta }) => {
  return {
    type: C.SET_PRODUCTS,
    payload: {
      data,
      meta,
    },
  };
};

export const appendProducts = ({ data, meta }) => {
  return {
    type: C.APPEND_PRODUCTS,
    payload: {
      data,
      meta,
    },
  };
};

export const setSearchString = (searchString) => ({
  type: C.SET_SEARCH_STRING,
  payload: { searchString },
});

// thunks

export const fetchProductsAsync = () => {
  return async (dispatch) => {
    const { data, meta } = await commerce.products.list();
    dispatch(setProducts({ data, meta }));
  };
};

export const search = (searchString) => {
  const query = searchString !== "" ? { query: searchString } : null;
  return async (dispatch) => {
    try {
      const { data, meta } = await commerce.products.list(query);
      if (data) {
        dispatch(setProducts({ data, meta }));
        dispatch(setSearchString(searchString));
      } else {
        dispatch(setSearchString(""));
        throw "Asnjë rezultat.";
      }
    } catch (error) {
      dispatch(setSearchString(""));
      throw error;
    }
  };
};

export const searchByCategoryId = (id) => {
  const query = id !== "" ? { category_id: id } : null;
  return async (dispatch) => {
    try {
      const { data, meta } = await commerce.products.list(query);
      if (data) {
        dispatch(setProducts({ data, meta }));
      } else {
        throw "Asnjë rezultat.";
      }
    } catch (error) {
      throw error;
    }
  };
};

export const appendProductsAsync = (page) => {
  return async (dispatch, getState) => {
    try {
      const { data, meta } = await commerce.products.list({
        page,
      });
      const newData = [
        ...cloneDeep(getState().products.data),
        ...cloneDeep(data),
      ];

      dispatch(setProducts({ data: newData, meta }));
    } catch (error) {
      throw error;
    }
  };
};
