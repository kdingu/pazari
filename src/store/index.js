import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
  products: { data: [], meta: {} },
  categories: [],
  cart: { line_items: [] },
  checkoutToken: {},
  snackbar: {
    showSuccess: false,
    showError: false,
    message: "",
    vertical: "bottom",
    horizontal: "right",
  },
  loader: false,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
