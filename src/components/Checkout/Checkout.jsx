import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../store/actions/";
import useStyles from "./styles";
import { useForm, FormProvider } from "react-hook-form";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const checkout = useSelector((state) => state.checkout);
  const dispatch = useDispatch();

  const methods = useForm();

  useEffect(() => {
    dispatch(checkoutActions.generateCheckoutToken(cart.id));
  }, [cart, dispatch]);

  return (
    <Container className={classes.root}>
      <div className={classes.toolbar} />
      <Typography variant="h6" gutterBottom>
        Detajet e blerjes
      </Typography>
      <CheckoutForm />
    </Container>
  );
};

export default Checkout;
