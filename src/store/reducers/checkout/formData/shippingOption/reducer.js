import * as C from "../../../../constant";

const initialState = {};

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_SHIPPING_OPTION:
      return payload.shippingOption;

    default:
      return state;
  }
};
