import cloneDeep from "lodash.clonedeep";
import * as C from "../../constant";

const initialState = {
  open: false,
  productInDrawer: {},
};

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.OPEN_DRAWER:
      return {
        ...cloneDeep(state),
        open: true,
      };

    case C.CLOSE_DRAWER:
      return {
        ...cloneDeep(state),
        open: false,
      };

    case C.SET_PRODUCT_IN_DRAWER:
      return {
        ...cloneDeep(state),
        productInDrawer: payload.product,
      };

    default:
      return state;
  }
};
