import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React, { useState } from "react";
import useStyles from "./styles";
import { noImageUrl } from "../../../constant";
import { useDispatch } from "react-redux";
import { cartActions, generalActions } from "../../../store/actions";
import { changeErrorsCount } from "../../../store/actions/general/actions";

const Product = ({ product }) => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              product.media.type === "image" && product.media.source
                ? product.media.source
                : noImageUrl
            }
            title={product.name}
          />
          <CardContent>
            <Typography
              className={classes.productName}
              gutterBottom
              variant="h6"
              component="h6"
            >
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.price.formatted_with_code}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            startIcon={<AddShoppingCart />}
            color="primary"
            aria-label="upload picture"
            component="span"
            disabled={disabled}
            onClick={() => {
              setDisabled(true);
              dispatch(cartActions.addProductToCartAsync(product.id))
                .then(() => setDisabled(false))
                .catch((error) => {
                  console.log(error);
                  setDisabled(false);
                  dispatch(generalActions.changeErrorsCount());
                });
            }}
          >
            {disabled ? "Prisni..." : "Shto në shportë"}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
