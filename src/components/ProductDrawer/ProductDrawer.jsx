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
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { AddShoppingCart } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  cartActions,
  generalActions,
  productActions,
} from "../../store/actions";
import { useForm, Controller } from "react-hook-form";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "ALL",
});

const ProductDrawer = () => {
  const classes = useStyles();

  const { handleSubmit, register, unregister } = useForm();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.productInDrawer);
  const open = useSelector((state) => state.products.productDrawer);

  const [selectedOptionsPrice, setSelectedOptionsPrice] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (selectedOptionsPrice !== 0) setSelectedOptionsPrice(0);
    // unregister(["variant", "option"]);
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

  const images = product.assets?.map((asset) => ({
    original: asset.url,
    thumbnail: asset.url,
    originalClass: "productimage",
  }));

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
          <div className={classes.wrapper}>
            {showSpinner && (
              <div className={classes.loader}>
                <CircularProgress />
              </div>
            )}
            {/* product image */}
            <div className={classes.imageContainer}>
              <ImageGallery items={images} showPlayButton={false} />
            </div>

            {/* product details */}
            <div className={classes.details}>
              {/* <form onSubmit={(e) => e.preventDefault()}> */}
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Typography
                    className={classes.productTitle}
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    <strong>{product.name}</strong>
                  </Typography>
                </Grid>

                <Grid
                  container
                  spacing={0}
                  item
                  xs={12}
                  alignItems="flex-start"
                  className={classes.mainDetails}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    md={6}
                    className={classes.description}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h6">Përshkrimi</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `${product.description}`,
                        }}
                      ></span>
                    </Grid>
                  </Grid>
                  <Grid container spacing={0} item xs={12} md={6}>
                    {product.variants?.length ? (
                      <>
                        <Grid item xs={12}>
                          <Typography variant="h6" style={{ marginBottom: 16 }}>
                            Variantet e disponueshme
                          </Typography>
                        </Grid>
                        <Grid container item xs={12}>
                          {product.variants.map((variant) => (
                            <Grid
                              key={variant.id}
                              item
                              xs={12}
                              style={{
                                marginBottom: 16,
                              }}
                            >
                              <form onSubmit={(e) => e.preventDefault()}>
                                <FormControl required fullWidth>
                                  <InputLabel htmlFor={variant.id}>
                                    {variant.name}
                                  </InputLabel>
                                  <Select
                                    defaultValue={variant.options[0].id}
                                    native
                                    inputProps={{
                                      name: variant.id,
                                      id: variant.id,
                                      ref: register,
                                    }}
                                    onChange={handleSubmit(updatePrice)}
                                  >
                                    {variant.options.map((option) => (
                                      <option
                                        key={option.id}
                                        value={option.id}
                                        disabled={
                                          option.is.quantity_limited &&
                                          option.quantity === 0
                                        }
                                      >
                                        {option.name}{" "}
                                        {option.is.quantity_limited &&
                                        option.quantity === 0
                                          ? "ska gjendje"
                                          : option.price.raw === 0
                                          ? null
                                          : `+${option.price.formatted_with_code}`}
                                      </option>
                                    ))}
                                  </Select>
                                </FormControl>
                              </form>
                            </Grid>
                          ))}
                        </Grid>
                      </>
                    ) : null}

                    <Grid item xs={12}>
                      <Typography variant="h6">Çmimi</Typography>
                      <Typography>
                        {formatter.format(
                          product.price.raw + selectedOptionsPrice
                        )}
                      </Typography>
                    </Grid>

                    {/* product actions */}
                    <Grid item xs={12}>
                      <Button
                        style={{ marginTop: 36 }}
                        disabled={disabled}
                        size="large"
                        color="primary"
                        variant="contained"
                        disableElevation
                        startIcon={<AddShoppingCart />}
                        onClick={handleSubmit(addToCart)}
                      >
                        Shto në shportë
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>

                {/* related products */}
                {product.related_products.length ? (
                  <Grid container spacing={1} item xs={12}>
                    <Grid item xs={12}>
                      <Typography variant="h6">Produkte të ngjashme</Typography>
                    </Grid>
                    {product.related_products.map((product) => (
                      <Grid
                        key={product.id}
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        align="center"
                      >
                        <RelatedProducts
                          product={product}
                          handleClick={setProductInDrawer}
                        />
                      </Grid>
                    ))}
                  </Grid>
                ) : null}
              </Grid>
              {/* </form> */}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ProductDrawer;
