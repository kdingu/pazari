import { Badge, Popover, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PopoverCartContent from "./PopoverCartContent/PopoverCartContent";
import useStyles from "./styles";

const PopoverCart = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const badge = useSelector((state) => state.cart.total_items);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        aria-label="Shiko shportën"
        color="inherit"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <Badge
          badgeContent={typeof badge === "number" ? badge : 0}
          color="error"
        >
          <ShoppingCart />
        </Badge>
      </IconButton>
      <Popover
        className={classes.root}
        id={id}
        open={open}
        anchorEl={anchorEl}
        elevation={5}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <PopoverCartContent closePopoverCart={handleClose} />
      </Popover>
    </>
  );
};

export default PopoverCart;
