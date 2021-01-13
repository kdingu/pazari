import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return pathname !== "/checkout" ? (
    <Container maxWidth="xl" className={classes.main}>
      <Container className={classes.content}>
        <Grid container>
          <Grid item xs={12}>
            <Typography align="center">Image</Typography>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.signature}>
        <Container>© Pazari - {new Date().getFullYear()}</Container>
      </div>
    </Container>
  ) : null;
};

export default Footer;
