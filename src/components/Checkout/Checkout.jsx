import React, { useEffect } from "react";
import { connect } from "react-redux";
import { checkoutActions } from "../../store/actions/";

const Checkout = ({ cart, generateCheckoutToken }) => {
  useEffect(() => {
    generateCheckoutToken(cart.id);
  }, [generateCheckoutToken, cart.id]);

  return (
    <div style={{ border: "5px solid red", marginTop: 300 }}>checkout</div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  generateCheckoutToken: (cartId) => {
    dispatch(checkoutActions.generateCheckoutToken(cartId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
