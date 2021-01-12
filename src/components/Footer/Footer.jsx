import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.main}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography>Footer</Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Footer;
