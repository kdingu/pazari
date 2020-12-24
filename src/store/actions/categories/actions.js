import * as C from "../../constant";
import { commerce } from "../../../lib/commerce";

// actions

export const setCategories = (categories) => ({
  type: C.SET_CATEGORIES,
  payload: { categories },
});

// thunks

export const fetchCategories = () => {
  return async (dispatch) => {
    const { data, meta } = await commerce.categories.list();
    dispatch(setCategories(data));
  };
};
