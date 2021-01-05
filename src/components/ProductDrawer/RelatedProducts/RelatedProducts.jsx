import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { noImageUrl } from "../../../constant";

const RelatedProducts = ({ product, handleClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleClick(product.id)}>
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
          <Typography gutterBottom variant="h6" component="h6">
            {product.name.length > 23
              ? `${product.name.substring(0, 23)}...`
              : product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RelatedProducts;
