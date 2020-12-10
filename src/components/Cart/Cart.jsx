import React from "react";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";
import { Container, Typography, Button, Grid, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import {
  emptyCartAsync,
  removeProductFromCartAsync,
  updateProductQtyAsync,
} from "../../store/actions/cart/actions";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleUpdateProductQty,
  handleRemoveProductFromCart,
  handleEmptyCart,
  handleCheckout,
}) => {
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
      <Grid container spacing={3}>
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
            Boshatise Karten
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            type="button"
            variant="contained"
            disableElevation
            color="primary"
            onClick={handleCheckout}
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
        Karta e Pazarit
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});
const mapDispatchToProps = (dispatch) => ({
  handleUpdateProductQty: (productId, quantity) =>
    dispatch(updateProductQtyAsync(productId, quantity)),
  handleRemoveProductFromCart: (productId) =>
    dispatch(removeProductFromCartAsync(productId)),
  handleEmptyCart: () => dispatch(emptyCartAsync()),
  handleCheckout: (cartId) => {
    console.log(cartId);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
