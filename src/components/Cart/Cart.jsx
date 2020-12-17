import React from "react";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";
import { Container, Typography, Button, Grid, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/actions";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleUpdateProductQty = (productId, quantity) => {
    dispatch(cartActions.updateProductQtyAsync(productId, quantity));
  };
  const handleRemoveProductFromCart = (productId) => {
    dispatch(cartActions.removeProductFromCartAsync(productId));
  };
  const handleEmptyCart = () => {
    dispatch(cartActions.emptyCartAsync());
  };

  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      Nuk keni asnje produkt ne karten tuaj.{" "}
      {
        <Link to="/products" className={classes.link}>
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
            <CartItem
              item={item}
              updateProductQty={handleUpdateProductQty}
              removeProductFromCart={handleRemoveProductFromCart}
            />
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
            variant="contained"
            disableElevation
            color="secondary"
            onClick={handleEmptyCart}
          >
            Boshatise Shportën
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            type="button"
            variant="contained"
            disableElevation
            color="primary"
          >
            Bli
          </Button>
        </div>
      </Paper>
    </>
  );

  return (
    <Container className={classes.main}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Shporta
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
