import * as C from "../../constant";

export const changeErrorsCount = (payload) => ({
  type: C.INCREMENT_ERRORS,
  payload,
});

export const setBackdrop = (payload) => ({
  type: C.SET_BACKDROP,
  payload,
});

export const setCustomerId = (payload) => ({
  type: C.SET_CUSTOMER_ID,
  payload,
});

export const setCustomerOrders = (payload) => ({
  type: C.SET_CUSTOMER_ORDERS,
  payload,
});
