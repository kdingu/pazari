import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import issueCustomerToken from "../../../services/issueCustomerToken";
import { generalActions } from "../../../store/actions";

const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const MyOrders = () => {
  const [phase, setPhase] = useState(1);
  const [clientEmail, setClientEmail] = useState("");

  const dispatch = useDispatch();

  const customer = useSelector((state) => state.customer);
  const customerAndData =
    customer.id && customer.orders.meta?.pagination?.total;

  const classes = useStyles();
  const { handleSubmit, control, errors } = useForm();

  useEffect(() => {
    document.title = "Pazari - Login";
  }, []);

  const onSubmit = async (data) => {
    try {
      dispatch(generalActions.setBackdrop(true));
      const res = await issueCustomerToken(data.email);
      if (res.data?.success) {
        setClientEmail(data.email);
        setPhase(2);
        dispatch(generalActions.setBackdrop(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const EmailSent = () => (
    <div className={classes.main}>
      <Paper variant="outlined" className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item xs={12} align="center">
            <Typography variant="h6" component="h1" gutterBottom>
              Ju dërguam një email tek "{clientEmail}". Hapeni emailin dhe
              klikoni tek "Login". Faleminderit!
            </Typography>
            <Typography variant="caption" gutterBottom>
              Nëse nuk ju ka ardhur një email, ju nuk jeni klient i mëparshëm
              dhe emaili juaj nuk egziston në sistem.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setPhase(1)}
        style={{ marginTop: 16 }}
      >
        Kthehu
      </Button>
    </div>
  );

  if (customerAndData) {
    return <Redirect to="/customer_orders" />;
  }

  return phase === 1 ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.main}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item xs={12} align="center">
              <Typography variant="h4" component="h1" gutterBottom>
                Shiko porositë e mëparme
              </Typography>
              <Typography variant="body1" gutterBottom>
                Nëse keni bërë blerje më parë, mund të kontrolloni porositë
                tuaja duke vendosur mëposhtë Emailin të cilin keni përdorur, dhe
                një email do t'ju vijë për tu autentikuar. Më pas mund të
                shikoni historikun e blerjeve tuaja.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Controller
                fullWidth
                as={TextField}
                name="email"
                label="Email"
                rules={{ required: true, pattern: emailRegEx }}
                control={control}
                defaultValue=""
              />
              {errors.email?.type === "required" && (
                <Typography variant="caption" style={{ color: "red" }}>
                  Emaili duhet të jetë i plotësuar
                </Typography>
              )}
              {errors.email?.type === "pattern" && (
                <Typography variant="caption" style={{ color: "red" }}>
                  Emaili nuk është i vlefshëm
                </Typography>
              )}
            </Grid>
          </Grid>
        </Paper>
        <Button
          color="secondary"
          variant="contained"
          disableElevation
          type="submit"
          style={{ marginTop: 16 }}
        >
          Kërko Porositë
        </Button>
      </div>
    </form>
  ) : phase === 2 ? (
    <EmailSent />
  ) : null;
};

export default MyOrders;
