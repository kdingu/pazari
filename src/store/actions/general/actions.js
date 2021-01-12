import * as C from "../../constant";

export const changeErrorsCount = (payload) => ({
  type: C.INCREMENT_ERRORS,
  payload,
});

export const setBackdrop = (payload) => ({
  type: C.SET_BACKDROP,
  payload,
});
