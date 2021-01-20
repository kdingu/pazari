import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import PopoverCart from "./PopoverCart/PopoverCart";
import logo from "../../assests/pazari-logo.png";
import useStyles from "./styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
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
          {customer?.id && customer.orders?.data?.length > 0 ? (
            <IconButton component={Link} to="/support">
              <AccountCircleIcon />
            </IconButton>
          ) : (
            <Button
              variant="outlined"
              component={Link}
              to="/support"
              style={{ marginRight: "16px" }}
            >
              Suporti i blerjeve
            </Button>
          )}

          <PopoverCart />
        </Toolbar>
      </AppBar>
    </>
  ) : null;
};

export default Navbar;
