import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { commerce } from "../../lib/commerce";
import { cartActions } from "../../store/actions";

const PaymentForm = ({ back }) => {
  const checkout = useSelector((state) => state.checkout);
  const dispatch = useDispatch();

  const Review = () => (
    <List
      dense
      disablePadding
      style={{ border: "1px solid rgba(0,0,0,0.2)", padding: "0" }}
    >
      {checkout.checkoutToken.live.line_items.map((product, index) => (
        <div key={product.id}>
          <ListItem style={{ padding: "0 3%" }}>
            <ListItemText
              primary={product.name}
              secondary={`Sasia: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.line_total.formatted_with_code}
            </Typography>
          </ListItem>
          {index !== checkout.checkoutToken.live.line_items.length - 1 && (
            <Divider light />
          )}
        </div>
      ))}
      <Divider />
      <ListItem style={{ padding: "0 3%", margin: "2.5% 0" }}>
        <ListItemText
          primary="Subtotali"
          primaryTypographyProps={{ variant: "h6" }}
        />
        <Typography variant="h6">
          {checkout.checkoutToken.live.subtotal.formatted_with_code}
        </Typography>
      </ListItem>
    </List>
  );

  const refreshCart = () => {
    dispatch(cartActions.refreshCartAsync());
  };

  const onCaptureCheckout = async (id, data) => {
    // call commerce.checkout.capture
    const order = await commerce.checkout.capture(id, data);
    //// set order state with response data
    dispatch(orderActions.setOrder(order));
    //// refresh cart
    refreshCart();
    ////// update cart state with response data
    //// navigate to successfull order page
    ////// store order in session storage
  };

  const handleCaptureCheckout = (e) => {
    e.preventDefault();

    const items = {};
    checkout.checkoutToken.live.line_items.map((item) => {
      items[item.id] = { quantity: item.quantity, variants: {} };
    });
    console.log(items);

    const orderData = {
      line_items: items,
      customer: {
        firstname: checkout.formData.firstname,
        lastname: checkout.formData.lastname,
        email: checkout.formData.email,
      },
      shipping: {
        name: `${checkout.formData.firstname} ${checkout.formData.lastname}`,
        street: checkout.formData.address1,
        town_city: checkout.formData.city,
        county_state: checkout.formData.shippingSubdivision,
        postal_zip_code: checkout.formData.zip,
        country: checkout.formData.shippingCountry,
      },
      fulfillment: {
        shipping_method: checkout.formData.shippingOption,
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: "4242 4242 4242 4242",
          expiry_month: "01",
          expiry_year: "2023",
          cvc: "123",
          postal_zip_code: "94103",
        },
      },
    };
    onCaptureCheckout(checkout.checkoutToken.id, orderData);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Review />
      </Grid>
      {/* <CardDetails /> */}
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Button color="primary" onClick={back}>
            Kthehu
          </Button>
        </Grid>
        <Grid align="right" item xs={6}>
          <Button color="primary" onClick={handleCaptureCheckout}>
            Paguaj
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentForm;
