import { Container } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return pathname !== "/checkout" ? (
    <Container id="footer" maxWidth="xl" className={classes.main}>
      <div className={classes.signature}>
        <Container>© Pazari - 2021</Container>
      </div>
    </Container>
  ) : null;
};

export default Footer;
