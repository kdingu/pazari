import CssBaseline from "@material-ui/core/CssBaseline";
import "fontsource-roboto";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "./store/actions/products/actions";
import { fetchCartAsync } from "./store/actions/cart/actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Footer,
  Products,
  Cart,
  Checkout,
  OrderSuccess,
  Support,
  CustomerOrders,
  Backdrop,
} from "./components";
import store from "./store";
import { ThemeProvider } from "@material-ui/core";
import theme from "./lib/MuiTheme/theme";
import { categoryActions } from "./store/actions";
import Snackbar from "./components/Snackbar";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("app mounted");
    const unsubStore = store.subscribe(() =>
      console.log("App.js - redux didUpdate")
    );

    dispatch(categoryActions.fetchCategories());
    dispatch(fetchProductsAsync());
    dispatch(fetchCartAsync());

    return unsubStore;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* backdrop */}
      <Backdrop />
      <Router>
        <CssBaseline />
        <Navbar />
        <Snackbar />

        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/order-success">
            <OrderSuccess />
          </Route>
          <Route exact path="/support">
            <Support />
          </Route>
          <Route exact path="/customer_orders">
            <CustomerOrders />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
