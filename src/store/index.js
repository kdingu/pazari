import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
  products: { data: [], meta: {} },
  categories: [],
  cart: {
    line_items: [],
    id: "",
    total_items: 1,
    total_unique_items: 1,
    subtotal: {},
  },
  checkout: {
    checkoutToken: {},
    shippingCountries: {},
    shippingSubdivisions: {},
    shippingOptions: [],
    formData: {
      // shipping only
      shippingCountry: "",
      shippingSubdivision: "",
      shippingOption: "",
      // personal
      firstname: "",
      lastname: "",
      address1: "",
      email: "",
      city: "",
      zip: "",
      // card
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvc: "",
    },
  },
  order: "",
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
