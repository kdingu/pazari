import {
  Card,
  CardActionArea,
  Typography,
  CardContent,
  Box,
  CardMedia,
} from "@material-ui/core";
import cx from "clsx";
import React from "react";
import useStyles from "./styles";
import { noImageUrl } from "../../../constant";
import { useDispatch } from "react-redux";
import { productActions } from "../../../store/actions";
import Image from "material-ui-image";
import { Skeleton } from "@material-ui/lab";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";

const LatestProduct = ({ product, dummy = false }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();

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
    <Card className={cx(classes.latestRoot, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={
          product.media.type === "image" && product.media.source
            ? product.media.source
            : noImageUrl
        }
      />
      <CardActionArea
        className={classes.actionArea}
        onClick={setProductInDrawerAndOpenDrawer}
      >
        <CardContent className={classes.content}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={360}
            height="100%"
            color={"common.white"}
            textAlign={"center"}
          >
            <Typography variant="h2" className={classes.title}>
              {product.name}
            </Typography>
            <Typography variant="h2" className={classes.cta}>
              Shiko Produktin
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LatestProduct;
