import * as C from "../../constant";
import shippingCountriesReducer from "./shippingCountries/reducer";
import shippingCountryReducer from "./formData/shippingCountry/reducer";
import shippingSubdivisionsReducer from "./shippingSubdivisions/reducer";
import shippingSubdivisionReducer from "./formData/shippingSubdivision/reducer";
import shippingOptionsReducer from "./shippingOptions/reducer";
import shippingOptionReducer from "./formData/shippingOption/reducer";
import formDataReducer from "./formData/data/reducer";

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
        formData: {
          ...state.formData,
          shippingCountry: shippingCountryReducer(state.shippingCountry, {
            type,
            payload: { shippingCountry: payload.shippingCountry },
          }),
        },
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
        formData: {
          ...state.formData,
          shippingSubdivision: shippingSubdivisionReducer(
            state.shippingSubdivision,
            {
              type,
              payload,
            }
          ),
        },
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
        formData: {
          ...state.formData,
          shippingOption: shippingOptionReducer(state.shippingOption, {
            type,
            payload,
          }),
        },
      };

    case C.SET_CHECKOUT_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...formDataReducer(state.formData, { type, payload }),
        },
      };

    case C.SET_CARD_DETAILS:
      return {
        ...state,
        formData: {
          ...state.formData,
          cardNumber: payload.data.cardnumber,
          expMonth: payload.data.expMonth,
          expYear: payload.data.expYear,
          cvc: payload.data.cvc,
        },
      };

    case C.RESET_FORM:
      return {
        ...state,
        shippingCountries: {},
        shippingSubdivisions: {},
        shippingOptions: [],
        formData: {
          ...state.formData,
          shippingCountry: "",
          shippingSubdivision: "",
          shippingOption: "",
        },
      };

    default:
      return state;
  }
};
