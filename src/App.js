import CssBaseline from "@material-ui/core/CssBaseline";
import "fontsource-roboto";
import React, { useEffect, useRef } from "react";
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
  CustomerAuthentication,
  CustomerOrders,
  Backdrop,
} from "./components";
import { ThemeProvider } from "@material-ui/core";
import theme from "./lib/MuiTheme/theme";
import { categoryActions, generalActions } from "./store/actions";
import Snackbar from "./components/Snackbar";
import { UserServices } from "./services";

const App = () => {
  const dispatch = useDispatch();
  const customerId = useSelector((state) => state.customer.id);
  const customer = JSON.parse(localStorage.getItem("user"));

  const prevCustomerId = useRef();

  useEffect(() => {
    dispatch(categoryActions.fetchCategories());
    dispatch(fetchProductsAsync());
    dispatch(fetchCartAsync());

    // check localStorage for customer data and if exists set user to redux store, also fetch user data
    if (customer?.jwt) {
      dispatch(generalActions.setCustomerId(customer.customer_id));
    }
  }, []);

  useEffect(() => {
    // call api for customer orders
    const getOrders = async () => {
      try {
        const res = await UserServices.listOrdersForCustomer(customerId);
        if (res.status === 200) {
          dispatch(generalActions.setCustomerOrders(res.data));
          prevCustomerId.current = customerId;
        }
        dispatch(generalActions.setBackdrop(false));
      } catch (error) {
        console.log(error);
      }
    };
    if (customerId && customerId !== prevCustomerId.current) getOrders();
  }, [customer]);

  return (
    <ThemeProvider theme={theme}>
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
          <Route exact path="/customer_authentication">
            <CustomerAuthentication />
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
