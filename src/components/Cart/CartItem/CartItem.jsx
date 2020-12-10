import React from "react";
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

const CartItem = ({ item, updateProductQty, removeProductFromCart }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Tooltip title={item.name}>
          <Typography variant="h5" className={classes.productName}>
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
        <Typography variant="h6">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <IconButton
            color="primary"
            size="small"
            onClick={() => updateProductQty(item.id, item.quantity - 1)}
          >
            <Remove />
          </IconButton>
          <Typography style={{ marginLeft: 5, marginRight: 5 }}>
            {item.quantity}
          </Typography>
          <IconButton
            color="primary"
            size="small"
            onClick={() => updateProductQty(item.id, item.quantity + 1)}
          >
            <Add />
          </IconButton>
        </div>
        <IconButton
          color="secondary"
          size="small"
          onClick={() => removeProductFromCart(item.id)}
        >
          <DeleteForever />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;
