import { commerce } from "../../../lib/commerce";
import * as C from "../../constant";

// actions

export const setCheckout = (checkout) => ({
  type: C.SET_CHECKOUT,
  payload: {
    checkout,
  },
});

export const setShippingCountries = (shippingCountries) => ({
  type: C.SET_SHIPPING_COUNTRIES,
  payload: {
    shippingCountries: shippingCountries.countries,
  },
});

export const setShippingCountry = (shippingCountry) => ({
  type: C.SET_SHIPPING_COUNTRY,
  payload: {
    shippingCountry,
  },
});

export const setShippingSubdivisions = (shippingSubdivisions) => ({
  type: C.SET_SHIPPING_SUBDIVISIONS,
  payload: {
    shippingSubdivisions,
  },
});

export const setShippingSubdivision = (shippingSubdivision) => ({
  type: C.SET_SHIPPING_SUBDIVISION,
  payload: {
    shippingSubdivision,
  },
});

export const setShippingOptions = (shippingOptions) => ({
  type: C.SET_SHIPPING_OPTIONS,
  payload: {
    shippingOptions,
  },
});

export const setShippingOption = (shippingOption) => ({
  type: C.SET_SHIPPING_OPTION,
  payload: {
    shippingOption,
  },
});

export const setFormData = (data) => ({
  type: C.SET_CHECKOUT_FORM_DATA,
  payload: {
    data,
  },
});

export const resetForm = () => ({
  type: C.RESET_FORM,
  payload: {},
});

// thunks

export const generateCheckoutToken = () => {
  return async (dispatch, getState) => {
    const cartHasItems = getState().cart.line_items.length > 0;

    if (cartHasItems) {
      const checkout = await commerce.checkout.generateTokenFrom(
        "cart",
        commerce.cart.id()
      );
      dispatch(setCheckout(checkout));
    } else {
      const checkout = { products: [] };
      dispatch(setCheckout(checkout));
    }
  };
};

export const getShippingCountries = () => {
  return async (dispatch, getState) => {
    const checkoutId = getState().checkout.checkoutToken.id || false;
    if (checkoutId) {
      const countries = await commerce.services.localeListShippingCountries(
        checkoutId
      );
      dispatch(setShippingCountries(countries));
    } else {
      const countries = [];
      dispatch(setShippingCountries(countries));
    }
  };
};

export const getShippingSubdivisions = (checkoutId, countryCode) => {
  return async (dispatch) => {
    const {
      subdivisions,
    } = await commerce.services.localeListShippingSubdivisions(
      checkoutId,
      countryCode
    );
    dispatch(setShippingSubdivisions(subdivisions));
    return subdivisions;
  };
};

export const getShippingOptions = (
  checkoutId,
  countryCode,
  subdivision = null
) => {
  return async (dispatch) => {
    try {
      const options = await commerce.checkout.getShippingOptions(checkoutId, {
        country: countryCode,
        region: subdivision,
      });
      dispatch(setShippingOptions(options));
      return options;
    } catch (error) {
      throw error;
    }
  };
};
