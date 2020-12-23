import * as C from "../../constant";

// actions

export const setOrder = (orderRef) => ({
  type: C.SET_ORDER,
  payload: {
    orderRef,
  },
});
