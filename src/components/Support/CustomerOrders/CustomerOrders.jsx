import { Button, Container, Paper, Typography } from "@material-ui/core";
import Hero from "../../Hero/Hero";
import React, { useEffect } from "react";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { UserServices } from "../../../services";
import { generalActions } from "../../../store/actions";
import { Link } from "react-router-dom";

const CustomerOrders = () => {
  const classes = useStyles();
  const customerId = useSelector((state) => state.customer.id);
  const orders = useSelector((state) => state.customer.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Pazari - Blerjet e mia";

    // call api for customer orders
    const getOrders = async () => {
      try {
        const res = await UserServices.listOrdersForCustomer(customerId);
        if (res.status === 200) {
          dispatch(generalActions.setCustomerOrders(res.data));
        }
        dispatch(generalActions.setBackdrop(false));
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

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

  const Orders = () => <></>;

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
        {orders.meta?.pagination?.total ? <Orders /> : <NoOrders />}
      </Container>
    </>
  );
};

export default CustomerOrders;
