import * as C from "../../constant";
import dataReducer from "./data/reducer";
import metaReducer from "./meta/reducer";

const initialState = { data: [], meta: {} };

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_PRODUCTS:
      return {
        // call data reducer with data as argument
        data: dataReducer(state.data, { type, payload: payload.data }),
        // call meta reducer with meta as argument
        meta: metaReducer(state.meta, { type, payload: payload.meta }),
      };

    case C.APPEND_PRODUCTS:
      return {
        // call data reducer with data as argument
        data: dataReducer(state.data, { type, payload: payload.data }),
        // call meta reducer with meta as argument
        meta: metaReducer(state.meta, { type, payload: payload.meta }),
      };

    default:
      return state;
  }
};
