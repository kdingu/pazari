import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import { useForm, Controller } from "react-hook-form";

import bg from "../../../assests/pazari-bg.svg";

const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const MyOrders = () => {
  const [phase, setPhase] = useState(1);
  const [clientEmail, setClientEmail] = useState("");

  const classes = useStyles();
  const { handleSubmit, control, errors } = useForm();

  const onSubmit = (data) => {
    setClientEmail(data.email);
    setPhase(2);
    console.log(data);
  };

  const EmailForm = () => (
    <div className={classes.main}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper className={classes.paper}>
          <Grid container spacing={4}>
            <Grid item xs={12} align="center">
              <Typography variant="h4" component="h1" gutterBottom>
                Shiko porositë e mëparme
              </Typography>
              <Typography variant="body1" gutterBottom>
                Nëse keni bërë blerje më parë, mund të kontrolloni porositë
                tuaja duke vendosur mëposhtë Emailin të cilin keni përdorur.
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
            <Grid item xs={12} align="center">
              <Button
                color="secondary"
                variant="contained"
                disableElevation
                type="submit"
              >
                Kërko Porositë
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );

  const OrdersHistory = () => (
    <div className={classes.main}>
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item xs={12} align="center">
            <Typography variant="h6" component="h1" gutterBottom>
              Lista e porosive për klientin me email: {clientEmail}
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              onClick={() => {
                setClientEmail("");
                setPhase(1);
              }}
            >
              Mbrapa
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );

  return phase === 1 ? (
    <div className={classes.main}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper className={classes.paper}>
          <Grid container spacing={4}>
            <Grid item xs={12} align="center">
              <Typography variant="h4" component="h1" gutterBottom>
                Shiko porositë e mëparme
              </Typography>
              <Typography variant="body1" gutterBottom>
                Nëse keni bërë blerje më parë, mund të kontrolloni porositë
                tuaja duke vendosur mëposhtë Emailin të cilin keni përdorur.
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
            <Grid item xs={12} align="center">
              <Button
                color="secondary"
                variant="contained"
                disableElevation
                type="submit"
              >
                Kërko Porositë
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  ) : phase === 2 ? (
    <OrdersHistory />
  ) : null;
};

export default MyOrders;
