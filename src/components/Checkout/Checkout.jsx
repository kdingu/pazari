import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../store/actions/";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkoutActions.generateCheckoutToken(cart.id));
  }, [cart.id, dispatch]);

  return (
    <div style={{ border: "5px solid red", marginTop: 300 }}>checkout</div>
  );
};

export default Checkout;
