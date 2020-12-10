import * as C from "../../../constant";

const initialState = {
  pagination: {
    total: 4,
    count: 2,
    per_page: 2,
    current_page: 1,
    total_pages: 2,
    links: {},
  },
};

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_PRODUCTS:
      return {
        ...payload,
      };

    case C.APPEND_PRODUCTS:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
