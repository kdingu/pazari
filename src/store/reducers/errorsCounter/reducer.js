import * as C from "../../constant";

const initialState = 0;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.INCREMENT_ERRORS:
      return state + 1;

    default:
      return state;
  }
};
