import * as C from "../../constant";

const initialState = ["cat1", "cat2"];

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.GET_CATEGORIES:
      return [...payload.categories];

    default:
      return state;
  }
};
