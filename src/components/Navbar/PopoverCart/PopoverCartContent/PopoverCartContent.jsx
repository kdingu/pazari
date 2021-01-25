import React from "react";
import Divider from "@material-ui/core/Divider";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import PopoverCartItem from "./PopoverCartItem/PopoverCartItem";
import useStyles from "./style";
import { useSelector } from "react-redux";
import { Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const PopoverCartContent = ({ closePopoverCart }) => {
  const cart = useSelector((state) => state.cart);
  const classes = useStyles();
  return (
    <Column p={0} gap={0} className={classes.card}>
      <Row wrap p={2} alignItems={"baseline"} className={classes.header}>
        <Item stretched>
          <Typography
            component="p"
            variant="h6"
            className={classes.headerTitle}
          >
            Shporta
          </Typography>
        </Item>
        <Item position="center">
          <Button
            component={Link}
            to="/cart"
            onClick={closePopoverCart}
            className={classes.headerLink}
          >
            <Typography className={classes.btn}>Shiko shportën</Typography>
          </Button>
        </Item>
      </Row>

      {cart.line_items.length > 0 ? (
        <>
          {cart.line_items.map((item, index) => (
            <Row key={item.id} className={classes.item}>
              <Item grow={1} style={{ maxWidth: "100%" }}>
                <PopoverCartItem item={item} />
                {index === cart.line_items.length - 1 ? null : (
                  <Divider variant="middle" className={classes.divider} />
                )}
              </Item>
            </Row>
          ))}
          <Row cssPosition="absolute" className={classes.footer}>
            <Item style={{ width: "100%" }}>
              <Grid container alignItems="center">
                <Grid item xs={10} align="left">
                  <Typography variant="subtitle1" className={classes.subtotal}>
                    Subtotali: {cart.subtotal.formatted_with_code}
                  </Typography>
                </Grid>
                <Grid item xs={2} align="right">
                  <Button
                    component={Link}
                    to="/checkout"
                    onClick={closePopoverCart}
                    className={classes.footerButton}
                  >
                    Bli
                  </Button>
                </Grid>
              </Grid>
            </Item>
          </Row>
        </>
      ) : (
        <Row>
          <Item position="center" className={classes.emptyCartMessage}>
            <Typography variant="subtitle1" color="textSecondary">
              Shporta është bosh. Shtoni diçka!
            </Typography>
          </Item>
        </Row>
      )}
    </Column>
  );
};

export default PopoverCartContent;
