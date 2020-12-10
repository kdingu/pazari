import cloneDeep from "lodash.clonedeep";
import { commerce } from "../../../lib/commerce";
import * as C from "../../constant";

// actions

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

// thunks

export const fetchProductsAsync = () => {
  return async (dispatch) => {
    const { data, meta } = await commerce.products.list({
      limit: 3,
    });
    dispatch(setProducts({ data, meta }));
  };
};

export const appendProductsAsync = (page) => {
  return async (dispatch, getState) => {
    try {
      const { data, meta } = await commerce.products.list({
        page,
        limit: 3,
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
