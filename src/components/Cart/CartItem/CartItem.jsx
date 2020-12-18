import React, { useState } from "react";
import {
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import { Add, Remove, DeleteForever } from "@material-ui/icons";
import useStyles from "./styles";
import { noImageUrl } from "../../../constant";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/actions";

const CartItem = ({ item }) => {
  const classes = useStyles();

  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  const updateProductQty = (id, quantity) => {
    setDisabled(true);
    dispatch(cartActions.updateProductQtyAsync(id, quantity)).then(() => {
      // setDisabled(false)
    });
  };

  const removeProductFromCart = (id) => {
    setDisabled(true);
    dispatch(cartActions.removeProductFromCartAsync(id));
  };

  return (
    <Card>
      <CardContent className={`${classes.cardContent} ${classes.cardHeader}`}>
        <Tooltip title={item.name}>
          <Typography variant="h6" className={classes.productName}>
            {item.name}
          </Typography>
        </Tooltip>
      </CardContent>
      <CardMedia
        image={
          item.media.type === "image" && item.media.source
            ? item.media.source
            : noImageUrl
        }
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1" className={classes.price}>
          {item.line_total.formatted_with_code}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <IconButton
            color="secondary"
            disabled={disabled}
            onClick={() => updateProductQty(item.id, item.quantity - 1)}
          >
            <Remove />
          </IconButton>
          <Typography style={{ marginLeft: 5, marginRight: 5 }}>
            {item.quantity}
          </Typography>
          <IconButton
            color="secondary"
            disabled={disabled}
            onClick={() => updateProductQty(item.id, item.quantity + 1)}
          >
            <Add />
          </IconButton>
        </div>
        <IconButton
          color="primary"
          disabled={disabled}
          onClick={() => removeProductFromCart(item.id)}
        >
          <DeleteForever />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;
