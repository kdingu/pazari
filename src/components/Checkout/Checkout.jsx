import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../store/actions/";
import { Close } from "@material-ui/icons";

const steps = ["Adresa e dërgesës", "Detajet e pagesës"];

const Checkout = () => {
  const dispatch = useDispatch();
  const checkoutToken = useSelector((state) => state.checkout.checkoutToken);

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(2);
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  useEffect(() => {
    setActiveStep(0);
    setLoadingCheckout(true);
    dispatch(checkoutActions.generateCheckoutToken()) // create checkoutToken
      .then(() => dispatch(checkoutActions.getShippingCountries())) // load available shipping countries for that token
      .then(() => setLoadingCheckout(false));

    const resetForm = () => {
      dispatch(checkoutActions.resetForm());
    };

    return () => {
      // reset select values and activeStep if checkout is unmounted
      resetForm();
      // dispatch(checkoutActions.setShippingCountry(""));
      // dispatch(checkoutActions.setShippingSubdivision(""));
    };
  }, []);

  const Confirmation = () => <div>Confirm</div>;

  const next = () => setActiveStep((step) => step + 1);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutId={checkoutToken.id} next={next} />
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
        <Grid container>
          <Grid item align="right" xs={12}>
            <IconButton
              component={Link}
              to="/cart"
              color="primary"
              aria-label="anulo"
            >
              <Close />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Checkout;
