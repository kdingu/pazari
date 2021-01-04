import { Button, Drawer, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { AddShoppingCart } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/actions";

const ProductDrawer = () => {
  const classes = useStyles();

  // const images = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //   },
  // ];

  const product = useSelector((state) => state.products.productInDrawer);

  const dispatch = useDispatch();
  const open = useSelector((state) => state.products.productDrawer);

  const closeDrawer = () => {
    dispatch(productActions.closeDrawer());
  };

  const images = product.assets?.map((asset) => ({
    original: asset.url,
    thumbnail: asset.url,
    originalClass: "productimage",
  }));

  if (!product.id) return null;

  return (
    <>
      <Drawer
        className={classes.root}
        anchor={"right"}
        open={open}
        onClose={closeDrawer}
      >
        <div className={classes.main} role="presentation">
          <div className={classes.wrapper}>
            {/* product image */}
            {/* <div className={classes.image}> */}
            <ImageGallery items={images} showPlayButton={false} />
            {/* </div> */}

            {/* product details */}
            <div className={classes.details}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h5" component="h2" align="center">
                    {product.name}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6">Përshkrimi</Typography>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `${product.description}`,
                    }}
                  ></span>
                </Grid>

                {product.variants?.length ? (
                  <Grid item xs={12}>
                    <Typography variant="h6">
                      Variantet e disponueshme
                    </Typography>
                    <Typography>Variant?</Typography>
                  </Grid>
                ) : null}

                <Grid item xs={12}>
                  <Typography variant="h6">Çmimi</Typography>
                  <Typography>{product.price.formatted_with_code}</Typography>
                </Grid>

                {/* product actions */}
                <Grid item xs={12} align="right">
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    startIcon={<AddShoppingCart />}
                    onClick={() => console.log("shto ne shporte")}
                  >
                    Shto në shportë
                  </Button>
                </Grid>

                {/* related products */}
                {product.related_products.length ? (
                  <Grid item xs={12}>
                    <Typography variant="h6">Produkte të ngjashme</Typography>
                  </Grid>
                ) : null}
              </Grid>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ProductDrawer;
