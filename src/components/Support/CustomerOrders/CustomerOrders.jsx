import { Button, Container, Paper, Typography } from "@material-ui/core";
import Hero from "../../Hero/Hero";
import React, { useEffect, useRef } from "react";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { UserServices } from "../../../services";
import { generalActions } from "../../../store/actions";
import { Link } from "react-router-dom";
import OrdersAccordion from "./OrdersAccordion/OrdersAccordion";

const CustomerOrders = () => {
  const classes = useStyles();
  const customerId = useSelector((state) => state.customer.id);
  const orders = useSelector((state) => state.customer.orders);
  const dispatch = useDispatch();

  const prevCustomerId = useRef();

  useEffect(() => {
    document.title = "Pazari - Blerjet e mia";

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
  }, [customerId]);

  const logout = () => {
    console.log("loggingout");
    // delete user from localStorage
    localStorage.removeItem("user");

    // delete customer/user from redux
    dispatch(generalActions.setCustomerId(""));
    dispatch(generalActions.setCustomerOrders({}));
  };

  const NoOrders = () => (
    <Paper variant="outlined" className={classes.noOrdersPaper}>
      <Typography>Ju nuk keni asnjë porosi.</Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="secondary"
        size="large"
        style={{ marginTop: 16 }}
      >
        Bli Diçka
      </Button>
    </Paper>
  );

  return (
    <>
      {orders.meta?.pagination?.total ? (
        <>
          <div className={classes.toolbar} />
          <Hero title="Historiku i blerjeve" />
        </>
      ) : null}
      <Container
        className={
          orders.meta?.pagination?.total ? classes.main : classes.mainMaxxedOut
        }
      >
        {orders.meta?.pagination?.total ? (
          <div style={{ width: "100%" }}>
            <OrdersAccordion orders={orders.data} />
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              style={{ marginTop: 36 }}
              onClick={logout}
            >
              Dil nga logaria
            </Button>
          </div>
        ) : (
          <NoOrders />
        )}
      </Container>
    </>
  );
};

export default CustomerOrders;
