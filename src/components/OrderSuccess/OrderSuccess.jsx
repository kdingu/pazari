import { Button, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import imageUrl from "../../assests/crayon-1779.png";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  const classes = useStyles();

  const orderRef = useSelector((state) => state.order);

  useEffect(() => {
    document.title = "Pazari - Faleminderit";
  }, []);

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.main}>
        <img src={imageUrl} width={225} className={classes.img} />
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          component="h1"
          className={classes.title}
        >
          POROSIA U PRANUA
        </Typography>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h4" align="center">
            <span className={classes.orderRef}>{orderRef}</span>
          </Typography>
          <div className={classes.body}>
            <Typography component="p" align="center" className={classes.text}>
              Ky është kodi i porosisë tuaj, ruajeni. Me këtë kod mund të
              kontaktoni me suportin për çdo kërkesë.
            </Typography>
            <Typography variant="body2" className={classes.subtitle}>
              Faleminderit
            </Typography>
          </div>
        </Paper>
        <Button
          style={{ marginTop: 16 }}
          component={Link}
          to="/"
          variant="contained"
          size="large"
          color="secondary"
        >
          Shko tek Pazari
        </Button>
      </div>
    </div>
  );
};

export default OrderSuccess;
