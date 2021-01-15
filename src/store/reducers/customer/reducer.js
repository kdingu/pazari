import * as C from "../../constant";

const initialState = {
  id: 0,
  orders: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_CUSTOMER_ID:
      return {
        ...state,
        id: payload,
      };

    case C.SET_CUSTOMER_ORDERS:
      return {
        ...state,
        orders: payload,
      };

    default:
      return state;
  }
};
