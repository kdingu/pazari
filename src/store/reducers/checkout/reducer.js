import * as C from "../../constant";
import shippingCountriesReducer from "./shippingCountries/reducer";
import shippingCountryReducer from "./shippingCountry/reducer";
import shippingSubdivisionsReducer from "./shippingSubdivisions/reducer";
import shippingSubdivisionReducer from "./shippingSubdivision/reducer";
import shippingOptionsReducer from "./shippingOptions/reducer";
import shippingOptionReducer from "./shippingOption/reducer";

const initialState = "";

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_CHECKOUT:
      return { ...state, checkoutToken: { ...payload.checkout } };

    case C.SET_SHIPPING_COUNTRIES:
      return {
        ...state,
        shippingCountries: shippingCountriesReducer(state.shippingCountries, {
          type,
          payload: { shippingCountries: payload.shippingCountries },
        }),
      };

    case C.SET_SHIPPING_COUNTRY:
      return {
        ...state,
        shippingCountry: shippingCountryReducer(state.shippingCountry, {
          type,
          payload: { shippingCountry: payload.shippingCountry },
        }),
      };

    case C.SET_SHIPPING_SUBDIVISIONS:
      return {
        ...state,
        shippingSubdivisions: shippingSubdivisionsReducer(
          state.shippingSubdivisions,
          {
            type,
            payload: { shippingSubdivisions: payload.shippingSubdivisions },
          }
        ),
      };

    case C.SET_SHIPPING_SUBDIVISION:
      return {
        ...state,
        shippingSubdivision: shippingSubdivisionReducer(
          state.shippingSubdivision,
          {
            type,
            payload,
          }
        ),
      };

    case C.SET_SHIPPING_OPTIONS:
      return {
        ...state,
        shippingOptions: shippingOptionsReducer(state.shippingOptions, {
          type,
          payload,
        }),
      };

    case C.SET_SHIPPING_OPTION:
      return {
        ...state,
        shippingOption: shippingOptionReducer(state.shippingOption, {
          type,
          payload,
        }),
      };

    default:
      return state;
  }
};
