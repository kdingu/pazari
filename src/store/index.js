import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
  backdrop: false,
  products: {
    data: [],
    meta: {},
    searchString: "",
    productDrawer: false,
    productInDrawer: {},
  },
  categories: [],
  cart: {
    line_items: [],
    id: "",
    total_items: "initial",
    total_unique_items: 0,
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
  errorsCount: 0,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
