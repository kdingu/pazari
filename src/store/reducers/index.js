// rootReducer

import { combineReducers } from "redux";

import productsReducer from "./products/reducer";
import productDrawerReducer from "./productDrawer/reducer";
import categoriesReducer from "./categories/reducer";
import cartReducer from "./cart/reducer";
import checkoutReducer from "./checkout/reducer";
import orderReducer from "./order/reducer";
import errorsCounterReducer from "./errorsCounter/reducer";
import backdropReducer from "./backdrop/reducer";
import customerReducer from "./customer/reducer";

export default combineReducers({
  backdrop: backdropReducer,
  products: productsReducer,
  drawer: productDrawerReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  order: orderReducer,
  errorsCount: errorsCounterReducer,
  customer: customerReducer,
});
