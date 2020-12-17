import * as C from "../../../../constant";

const initialState = "";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_SHIPPING_SUBDIVISION:
      return payload.shippingSubdivision;

    default:
      return state;
  }
};
