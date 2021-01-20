import * as C from "../../constant";

const initialState = false;

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_BACKDROP:
      return payload;

    default:
      return state;
  }
};
