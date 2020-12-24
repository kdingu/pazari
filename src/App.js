import CssBaseline from "@material-ui/core/CssBaseline";
import "fontsource-roboto";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchProductsAsync } from "./store/actions/products/actions";
import { fetchCartAsync } from "./store/actions/cart/actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  Products,
  Cart,
  Checkout,
  OrderSuccess,
} from "./components";
import store from "./store";
import { ThemeProvider } from "@material-ui/core";
import theme from "./lib/MuiTheme/theme";
import { categoryActions } from "./store/actions";

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

  React.useEffect(() => {
    console.log("app update");
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Navbar />

        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
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
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
