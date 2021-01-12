import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { noImageUrl } from "../../../constant";
import { useDispatch } from "react-redux";
import { productActions } from "../../../store/actions";

const Product = ({ product, handleClick = undefined, raised = false }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const setProductInDrawerAndOpenDrawer = () => {
    dispatch(productActions.setProductInDrawer(product));
    dispatch(productActions.openDrawer());
  };

  return (
    <div>
      <Card raised={raised} className={classes.root}>
        <CardActionArea
          onClick={
            handleClick
              ? () => handleClick(product.id)
              : setProductInDrawerAndOpenDrawer
          }
        >
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
      </Card>
    </div>
  );
};

export default Product;
