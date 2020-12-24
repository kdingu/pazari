import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import PopoverCart from "./PopoverCart/PopoverCart";
import logo from "../../assests/pazari-logo.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  const { pathname } = useLocation();

  return pathname !== "/checkout" ? (
    <>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar className={classes.constrictWidth}>
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img src={logo} alt="logo" height={55} />
            Pazari
          </Typography>
          <div className={classes.grow}></div>
          {/* <Button
            component={NavLink}
            to="/products"
            aria-label="Shiko shportën"
            color="inherit"
          >
            <Typography className={classes.button} color="inherit">
              Shiko Markatën
            </Typography>
          </Button> */}
          <div className={classes.button}>
            <PopoverCart />
          </div>
        </Toolbar>
      </AppBar>
    </>
  ) : null;
};

export default Navbar;
