import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Grid,
  IconButton,
  Tooltip,
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
    document.title = "Pazari - Arka";
    setActiveStep(0);

    const generateTokenAndGetCountries = () => {
      setLoadingCheckout(true);
      dispatch(checkoutActions.generateCheckoutToken()) // create checkoutToken
        .then(() => dispatch(checkoutActions.getShippingCountries())) // load available shipping countries for that token
        .then(() => setLoadingCheckout(false));
    };
    generateTokenAndGetCountries();

    const resetForm = () => {
      dispatch(checkoutActions.resetForm());
    };

    return () => {
      resetForm();
    };
    // eslint-disable-next-line
  }, []);

  const Confirmation = () => <div>Confirm</div>;

  const next = () => setActiveStep((step) => step + 1);
  const back = () => setActiveStep((step) => step - 1);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutId={checkoutToken.id} next={next} />
    ) : (
      <PaymentForm back={back} />
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
            <Tooltip title="Kthehu tek shporta" arrow placement="left">
              <IconButton
                component={Link}
                to="/cart"
                color="primary"
                aria-label="anulo"
              >
                <Close />
              </IconButton>
            </Tooltip>
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
