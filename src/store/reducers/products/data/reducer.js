import * as C from "../../../constant";

const initialState = [
  {
    id: 1,
    name: "Macbook Pro M1",
    description: "123",
    price: {},
    quantity: 999,
    media: {},
    assets: [],
  },
];

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_PRODUCTS:
      return [...payload];

    case C.APPEND_PRODUCTS:
      return [...state, ...payload];

    default:
      return state;
  }
};
