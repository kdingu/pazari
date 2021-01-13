// rootReducer

import { combineReducers } from "redux";

import productsReducer from "./products/reducer";
import categoriesReducer from "./categories/reducer";
import cartReducer from "./cart/reducer";
import checkoutReducer from "./checkout/reducer";
import orderReducer from "./order/reducer";
import errorsCounterReducer from "./errorsCounter/reducer";
import backdropReducer from "./backdrop/reducer";

export default combineReducers({
  backdrop: backdropReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  order: orderReducer,
  errorsCount: errorsCounterReducer,
});
