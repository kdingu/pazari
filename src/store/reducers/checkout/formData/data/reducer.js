import * as C from "../../../../constant";

const initialState = {};

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_CHECKOUT_FORM_DATA:
      return { ...state, ...payload.data };

    default:
      return state;
  }
};
