import {
  Card,
  CardActionArea,
  Typography,
  CardContent,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { noImageUrl } from "../../../constant";
import { useDispatch } from "react-redux";
import { productActions } from "../../../store/actions";
import Image from "material-ui-image";
import { Skeleton } from "@material-ui/lab";

const Product = ({
  product,
  handleClick = undefined,
  raised = false,
  dummy = false,
}) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const setProductInDrawerAndOpenDrawer = () => {
    dispatch(productActions.setProductInDrawer(product));
    dispatch(productActions.openDrawer());
  };

  if (dummy) {
    return (
      <div>
        <Skeleton variant="rect" height={220} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
    );
  }

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
          <Image
            className={classes.media}
            aspectRatio={4 / 2.5}
            src={
              product.media.type === "image" && product.media.source
                ? product.media.source
                : noImageUrl
            }
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
