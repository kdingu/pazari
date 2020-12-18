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
import { useSelector } from "react-redux";

const PaymentForm = ({ back }) => {
  const checkoutToken = useSelector((state) => state.checkout.checkoutToken);

  const Review = () => (
    <List
      dense
      disablePadding
      style={{ border: "1px solid rgba(0,0,0,0.2)", padding: "0" }}
    >
      {checkoutToken.live.line_items.map((product, index) => (
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
          {index !== checkoutToken.live.line_items.length - 1 && (
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
          {checkoutToken.live.subtotal.formatted_with_code}
        </Typography>
      </ListItem>
    </List>
  );

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
          <Button color="primary" onClick={() => console.log("paguaj")}>
            Paguaj
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentForm;
