import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { commerce } from "../../lib/commerce";
import {
  cartActions,
  checkoutActions,
  orderActions,
} from "../../store/actions";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "ALL",
});

const PaymentForm = ({ back }) => {
  const history = useHistory();
  const classes = useStyles();
  const checkout = useSelector((state) => state.checkout);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const methods = useForm();

  const [shippingPrice, setShippingPrice] = React.useState({ valid: false });

  const fetchShippingPrice = async () => {
    const checkoutTokenId = checkout.checkoutToken.id;
    const shipping_option_id = checkout.formData.shippingOption;
    const country = checkout.formData.shippingCountry;
    const region = checkout.formData.shippingSubdivision;

    try {
      const { valid, price } = await commerce.checkout.checkShippingOption(
        checkoutTokenId,
        {
          shipping_option_id,
          country,
          region,
        }
      );
      setShippingPrice({
        valid,
        price,
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchShippingPrice();
  }, [checkout.checkoutToken.id]);

  const Review = () => {
    let total =
      shippingPrice.valid && shippingPrice.price
        ? shippingPrice.price.raw + checkout.checkoutToken.live.subtotal.raw
        : checkout.checkoutToken.live.subtotal.raw;

    total = formatter.format(total);

    return (
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
          <ListItemText primary="Subtotali" />
          <Typography>
            {checkout.checkoutToken.live.subtotal.formatted_with_code}
          </Typography>
        </ListItem>
        <ListItem style={{ padding: "0 3%", margin: "2.5% 0" }}>
          <ListItemText />
          {shippingPrice.valid && shippingPrice.price ? (
            <Typography variant="caption">
              + {shippingPrice.price.formatted_with_code} Dërgesa
            </Typography>
          ) : (
            <Typography variant="caption">Dërgesa Falas</Typography>
          )}
        </ListItem>
        <Divider />
        <ListItem style={{ padding: "0 3%", margin: "2.5% 0" }}>
          <ListItemText
            primary="Totali"
            primaryTypographyProps={{ variant: "h6" }}
          />
          <Typography variant="h6">{total}</Typography>
        </ListItem>
      </List>
    );
  };

  const onCaptureCheckout = async (id, data) => {
    setLoading(true);
    console.log("captureCheckout: ", id, data);
    try {
      // call commerce.checkout.capture
      const { customer_reference } = await commerce.checkout.capture(id, data);
      //// set order state with response data
      dispatch(orderActions.setOrder(customer_reference));
      // refresh cart
      dispatch(cartActions.refreshCartAsync());
      //// navigate to successfull order page
      history.push("/order-success");
      ////// store order in session storage
    } catch (error) {
      console.log(error);
    }
  };

  const handleCaptureCheckout = async (data) => {
    dispatch(checkoutActions.setCardDetails(data));

    let items = {};
    checkout.checkoutToken.live.line_items.map((item) => {
      const variants = {};
      for (const variant of item.variants) {
        variants[variant.variant_id] = variant.option_id;
      }
      items[item.id] = { quantity: item.quantity, variants };
    });

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
          number: data.cardnumber,
          expiry_month: data.expMonth,
          expiry_year: data.expYear,
          cvc: data.cvc,
          postal_zip_code: checkout.formData.zip,
        },
      },
    };
    onCaptureCheckout(checkout.checkoutToken.id, orderData);
  };

  return (
    <>
      {loading ? (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      ) : null}
      <form onSubmit={methods.handleSubmit(handleCaptureCheckout)}>
        <Grid container spacing={3}>
          <Grid container item xs={12} justify="center">
            <Grid item xs={12}>
              <Review />
            </Grid>
            <Grid
              style={{ marginTop: "1rem" }}
              container
              item
              spacing={3}
              xs={12}
            >
              <Grid item xs={12}>
                {/* card number */}
                <Controller
                  control={methods.control}
                  as={TextField}
                  name="cardnumber"
                  label="Numri i kartës"
                  required
                  rules={{
                    minLength: 14,
                    maxLength: 16,
                    pattern: /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/,
                  }}
                  fullWidth
                  defaultValue=""
                />
                {methods.errors.cardnumber && (
                  <Typography variant="caption" color="error">
                    Numri i kartës nuk është i vlefshëm
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                {/* CVC number */}
                <Controller
                  control={methods.control}
                  as={TextField}
                  name="cvc"
                  label="CVC"
                  required
                  rules={{
                    minLength: 3,
                    maxLength: 3,
                  }}
                  fullWidth
                  defaultValue=""
                />
                {methods.errors.cvc && (
                  <Typography variant="caption" color="error">
                    Numri CVC nuk është i vlefshëm
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                {/* Exp Month */}
                <Controller
                  control={methods.control}
                  as={TextField}
                  name="expMonth"
                  label="Muaji i skadimit"
                  required
                  rules={{
                    minLength: 1,
                    maxLength: 2,
                    min: 1,
                    max: 12,
                  }}
                  fullWidth
                  defaultValue=""
                />
                {methods.errors.expMonth && (
                  <Typography variant="caption" color="error">
                    Muaji i skadimit nuk është i vlefshëm
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                {/* Exp Year */}
                <Controller
                  control={methods.control}
                  as={TextField}
                  name="expYear"
                  label="Viti i skadimit"
                  required
                  rules={{
                    minLength: 4,
                    maxLength: 4,
                    min: new Date().getFullYear(),
                  }}
                  fullWidth
                  defaultValue=""
                />
                {methods.errors.expYear && (
                  <Typography variant="caption" color="error">
                    Viti i skadimit nuk është i vlefshëm
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
          {/* <CardDetails /> */}
          <Grid container item xs={12} style={{ marginTop: 26 }}>
            <Grid item xs={6}>
              <Button onClick={back}>Kthehu</Button>
            </Grid>
            <Grid align="right" item xs={6}>
              <Button
                color="primary"
                disableElevation
                variant="contained"
                type="submit"
              >
                Paguaj
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default PaymentForm;
