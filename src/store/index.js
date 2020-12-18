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
      shippingCountry: "",
      shippingSubdivision: "",
      shippingOption: "",
      firstname: "",
      lastname: "",
      address1: "",
      email: "",
      city: "",
      zip: "",
    },
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
