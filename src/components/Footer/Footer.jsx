import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return pathname !== "/checkout" ? (
    <Container maxWidth="xl" className={classes.main}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography>Footer</Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  ) : null;
};

export default Footer;
