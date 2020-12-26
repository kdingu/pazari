import * as C from "../../constant";

export const changeErrorsCount = (payload) => ({
  type: C.INCREMENT_ERRORS,
  payload,
});
