import {
  Button,
  Drawer,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
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
import { useForm } from "react-hook-form";

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

  const closeDrawer = () => {
    dispatch(productActions.closeDrawer());
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

    let total = 0;
    for (const selected of transformed) {
      if (!selected.option) continue;
      let options = product.variants.filter(
        (variant) => variant.id === selected.variant
      )[0].options;
      let selectedOption = options.filter(
        (option) => option.id === selected.option
      )[0];
      total += selectedOption.price.raw;
    }

    setSelectedOptionsPrice(total);
  };

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
            <div className={classes.imageContainer}>
              <ImageGallery items={images} showPlayButton={false} />
            </div>

            {/* product details */}
            <div className={classes.details}>
              <form onSubmit={(e) => e.preventDefault()}>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <Typography variant="h5" component="h2" align="center">
                      <strong>{product.name}</strong>
                    </Typography>
                  </Grid>

                  <Grid container item xs={12}>
                    <Grid item xs={6}>
                      <Typography variant="h6">Përshkrimi</Typography>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `${product.description}`,
                        }}
                      ></span>
                    </Grid>
                    <Grid item xs={6}>
                      {product.variants?.length ? (
                        <Grid container item xs={12}>
                          <Grid item xs={12}>
                            <Typography variant="h6">
                              Variantet e disponueshme
                            </Typography>
                          </Grid>
                          <Grid
                            container
                            item
                            xs={12}
                            style={{ marginTop: 26 }}
                          >
                            {product.variants.map((variant) => (
                              <Grid
                                key={variant.id}
                                style={{ marginTop: 16 }}
                                item
                                xs={12}
                              >
                                <FormControl required fullWidth>
                                  <InputLabel htmlFor="variant-native-select">
                                    {variant.name}
                                  </InputLabel>
                                  <Select
                                    defaultValue={variant.options[0].id}
                                    native
                                    inputProps={{
                                      name: variant.id,
                                      id: "variant-native-select",
                                      ref: register,
                                    }}
                                    onChange={handleSubmit(updatePrice)}
                                  >
                                    {variant.options.map((option) => (
                                      <option key={option.id} value={option.id}>
                                        {option.name}{" "}
                                        {option.price.raw !== 0 &&
                                          `(+ ${option.price.formatted_with_code})`}
                                      </option>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
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
                          disabled={disabled}
                          size="large"
                          color="primary"
                          variant="contained"
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
                    <Grid item xs={12}>
                      <Typography variant="h6">Produkte të ngjashme</Typography>
                    </Grid>
                  ) : null}
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ProductDrawer;
