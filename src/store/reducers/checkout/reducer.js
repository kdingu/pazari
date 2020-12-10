import * as C from "../../constant";

const initialState = "";

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.GENERATE_CHECKOUT_TOKEN:
      return state;

    default:
      return state;
  }
};
