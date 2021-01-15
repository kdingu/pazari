import React, { useEffect, useState } from "react";
import CartItem from "./CartItem/CartItem";
import { Hero } from "../";
import useStyles from "./styles";
import { Container, Typography, Button, Grid, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/actions";
import { Link } from "react-router-dom";
import { DeleteForever } from "@material-ui/icons";

const Cart = () => {
  const [disabled, setDisabled] = useState(false);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleEmptyCart = () => {
    setDisabled(true);
    dispatch(cartActions.emptyCartAsync()).then(() => setDisabled(false));
  };

  const classes = useStyles();

  useEffect(() => {
    document.title = "Pazari - Shporta";
  }, []);

  const EmptyCart = () => (
    <Typography
      variant="h5"
      component="p"
      align="center"
      style={{
        minHeight: "200px",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>Nuk keni asnjë produkt në shportën tuaj.</span>
      {
        <Link to="/" className={classes.link}>
          Shikoni produktet dhe zgjidhni çfarë ju pëlqen!
        </Link>
      }
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={2}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <Paper variant="outlined" className={classes.cardDetails}>
        <Typography variant="subtitle1" className={classes.subtotal}>
          Subtotali: {cart.subtotal.formatted_with_code}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            type="button"
            startIcon={<DeleteForever />}
            variant="outlined"
            disableElevation
            color="primary"
            disabled={disabled}
            onClick={handleEmptyCart}
          >
            {disabled ? "Prisni..." : "Boshatise Shportën"}
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            type="button"
            variant="contained"
            disableElevation
            color="secondary"
          >
            Bli
          </Button>
        </div>
      </Paper>
    </>
  );

  return (
    <>
      <div className={classes.toolbar} />
      <Hero title="Shporta" />
      <Container className={classes.main}>
        <div className={classes.toolbar} />
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </>
  );
};

export default Cart;
