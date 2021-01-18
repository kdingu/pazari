import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import PopoverCart from "./PopoverCart/PopoverCart";
import logo from "../../assests/pazari-logo.png";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const classes = useStyles();
  const customer = useSelector((state) => state.customer);

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
          <Button
            variant="outlined"
            component={Link}
            to="/support"
            style={{ marginRight: "16px" }}
          >
            {customer.id
              ? `Blerjet e mia - ${customer.orders?.data[0].customer.firstname} ${customer.orders?.data[0].customer.lastname}`
              : "Suporti i blerjeve"}
          </Button>
          <PopoverCart />
        </Toolbar>
      </AppBar>
    </>
  ) : null;
};

export default Navbar;
