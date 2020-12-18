import { Badge, Popover, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React, { useState } from "react";
import { connect } from "react-redux";
import PopoverCartContent from "./PopoverCartContent/PopoverCartContent";

const PopoverCart = ({ badge }) => {
  const [anchorEl, setAnchorEl] = useState(null);

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
        <Badge badgeContent={badge} color="error">
          <ShoppingCart />
        </Badge>
      </IconButton>
      <Popover
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

const mapStateToProps = (state) => ({
  badge: state.cart.total_items,
});

export default connect(mapStateToProps)(PopoverCart);
