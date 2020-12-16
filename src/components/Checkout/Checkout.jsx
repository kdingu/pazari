import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../store/actions/";

const steps = ["Adresa e dërgesës", "Detajet e pagesës"];

const Checkout = () => {
  const dispatch = useDispatch();
  const checkoutToken = useSelector((state) => state.checkout.checkoutToken);

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  useEffect(() => {
    setLoadingCheckout(true);
    dispatch(checkoutActions.generateCheckoutToken()) // create checkoutToken
      .then(() => dispatch(checkoutActions.getShippingCountries())) // load available shipping countries for that token
      .then(() => setLoadingCheckout(false));

    return () => {
      // reset select values if checkout is unmounted
      dispatch(checkoutActions.setShippingCountry(""));
      dispatch(checkoutActions.setShippingSubdivision(""));
    };
  }, []);

  const Confirmation = () => <div>Confirm</div>;

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutId={checkoutToken.id} />
    ) : (
      <PaymentForm />
    );

  return (
    <>
      {loadingCheckout ? (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      ) : null}
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Arka
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
