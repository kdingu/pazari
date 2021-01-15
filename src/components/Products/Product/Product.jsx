import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./styles";
import { noImageUrl } from "../../../constant";
import loadingComponentImage from "../../../assests/placeholder-transparent.png";
import { useDispatch } from "react-redux";
import { productActions } from "../../../store/actions";
import Image from "material-ui-image";

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
      <div style={{ opacity: "0.5" }}>
        <Card raised={raised} className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={loadingComponentImage}
              title={"Loading Image"}
            />
            <CardContent>
              <Typography
                className={classes.productName}
                gutterBottom
                variant="h6"
                component="h6"
              >
                Duke u ngarkuar ...
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                10,000.00 ALL
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
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
          {/* <CardMedia
            className={classes.media}
            image={
              product.media.type === "image" && product.media.source
                ? product.media.source
                : noImageUrl
            }
            title={product.name}
          /> */}
          <Image
            className={classes.media}
            aspectRatio={4 / 2.5}
            cover={true.toString()}
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
