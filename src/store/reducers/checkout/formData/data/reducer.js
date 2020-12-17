import * as C from "../../../../constant";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_CHECKOUT_FORM_DATA:
      return { ...state, ...payload.data };

    // case C.RESET_FORM:
    //   const newState = {};
    //   Object.keys(state).map((key) => {
    //     newState[key] = "";
    //   });
    //   return newState;

    default:
      return state;
  }
};
