import {
  Button,
  CircularProgress,
  Drawer,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { AddShoppingCart } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  cartActions,
  generalActions,
  productActions,
} from "../../../store/actions";
import { useForm } from "react-hook-form";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import RelatedProducts from "../Product/Product";

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "ALL",
});

const ProductDrawer = () => {
  const classes = useStyles();

  const { handleSubmit, register } = useForm();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.productInDrawer);
  const open = useSelector((state) => state.products.productDrawer);

  const [selectedOptionsPrice, setSelectedOptionsPrice] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (selectedOptionsPrice !== 0) setSelectedOptionsPrice(0);
  }, [product]);

  const closeDrawer = () => {
    dispatch(productActions.closeDrawer());
  };

  const setProductInDrawer = (productId) => {
    setShowSpinner(true);
    dispatch(productActions.setProductInDrawerById(productId)).then(() =>
      setShowSpinner(false)
    );
  };

  const images = product.assets?.map((asset) => asset.url);

  const addToCart = (data) => {
    console.log(data);

    setDisabled(true);
    dispatch(cartActions.addProductToCartAsync(product.id, 1, data))
      .then(() => setDisabled(false))
      .catch((error) => {
        console.log(error);
        setDisabled(false);
        dispatch(generalActions.changeErrorsCount());
      });
  };

  const updatePrice = (data) => {
    const transformed = Object.entries(data).map(([variant, option]) => ({
      variant,
      option,
    }));

    console.log(data);

    let total = 0;
    for (const selected of transformed) {
      console.log(selected);
      // if (!selected.option) continue;
      // let ops = product.variants.filter(
      //   (variant) => variant.id === selected.variant
      // )[0].options;
      // let selectedOption = ops.filter(
      //   (option) => option.id === selected.option
      // )[0];
      // total += selectedOption.price.raw;
    }

    setSelectedOptionsPrice(total);
  };

  const primaryOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
  };

  const thumbnailOptions = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
    updateOnMove: true,
  };

  if (!product || !product.id) return null;

  return (
    <>
      <Drawer
        className={classes.root}
        anchor={"right"}
        open={open}
        onClose={closeDrawer}
      >
        <div className={classes.main} role="presentation">
          <Grid container spacing={5}>
            {/* product images gallery */}
            <Grid item xs={12} lg={6}>
              <ImageCarousel images={images} />
            </Grid>

            {/* product details */}
            <Grid container item xs={12} lg={6}>
              details
            </Grid>
          </Grid>
        </div>
      </Drawer>
    </>
  );
};

export default ProductDrawer;
