// rootReducer

import { combineReducers } from "redux";

import productsReducer from "./products/reducer";
import categoriesReducer from "./categories/reducer";
import cartReducer from "./cart/reducer";
import checkoutReducer from "./checkout/reducer";

export default combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  checkoutToken: checkoutReducer,
});
