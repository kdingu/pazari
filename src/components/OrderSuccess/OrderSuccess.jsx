import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import imageUrl from "../../assests/crayon-1779.png";

const OrderSuccess = () => {
  const classes = useStyles();

  const orderRef = useSelector((state) => state.order);

  return (
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
    </div>
  );
};

export default OrderSuccess;
