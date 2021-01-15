import {
  Button,
  CircularProgress,
  Divider,
  Drawer,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import useStyles from "./styles";
import { AddShoppingCart } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  cartActions,
  generalActions,
  productActions,
} from "../../../store/actions";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "ALL",
});

const ProductDrawer = () => {
  const classes = useStyles();

  const form = useRef();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.drawer.productInDrawer);
  const open = useSelector((state) => state.drawer.open);
  const cart = useSelector((state) => state.cart);

  const [state, setState] = useState({});
  const [selectedOptionsPrice, setSelectedOptionsPrice] = useState(0);

  useEffect(() => {
    if (selectedOptionsPrice !== 0) setSelectedOptionsPrice(0);
    setState({});
  }, [product]);

  useEffect(() => {
    const updatePrice = () => {
      let total = 0;
      // parse price for selected option(s)
      const selectedVariants = Object.entries(state);
      for (const selected of selectedVariants) {
        const variant = product.variants.filter(
          (variant) => variant.id === selected[0]
        );
        const option =
          variant[0]?.options.filter((option) => option.id === selected[1]) ||
          0;
        total += option[0]?.price.raw || 0;
      }
      // update selectedOptionsPrice
      setSelectedOptionsPrice(total);
    };

    if (Object.keys(state).length !== 0) {
      updatePrice();
    }
  }, [state]);

  const closeDrawer = () => {
    dispatch(productActions.closeDrawer());
  };

  const setProductInDrawer = (productId) => {
    dispatch(generalActions.setBackdrop(true));
    dispatch(productActions.setProductInDrawerById(productId))
      .then(() => {
        dispatch(generalActions.setBackdrop(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(generalActions.setBackdrop(false));
      });
  };

  const images = product.assets?.map((asset) => asset.url);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [];
    // extraxt form data
    for (const sth of e.target) {
      if (sth.type === "text") {
        data.push({ variant: sth.name, option: sth.value });
      }
    }

    // transform variants data to requested commercejs format
    const variants = {};
    for (const variant of data) {
      variants[variant.variant] = variant.option;
    }

    // add product to cart
    dispatch(generalActions.setBackdrop(true));
    dispatch(cartActions.addProductToCartAsync(product.id, 1, variants))
      .then(() => {
        dispatch(generalActions.setBackdrop(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(generalActions.setBackdrop(false));
      });
  };

  const ProductVariants = ({ variant }) => (
    <Grid item xs={12}>
      <FormControl fullWidth required>
        <InputLabel id={variant.id}>{variant.name}</InputLabel>
        <Select
          labelId={variant.id}
          id={variant.id}
          name={variant.id}
          defaultValue={""}
          value={state[variant.id]}
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value });
          }}
        >
          {variant.options.map((option) => (
            <MenuItem
              key={option.id}
              value={option.id}
              disabled={option.is.quantity_limited && option.quantity === 0}
            >
              {option.name}{" "}
              {option.price.raw !== 0
                ? `+${option.price.formatted_with_code}`
                : null}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );

  if (!product || !product.id) return null;

  return (
    <Drawer
      className={classes.root}
      anchor={"right"}
      open={open}
      onClose={closeDrawer}
    >
      <div
        className={classes.main}
        role="presentation"
        style={{ maxHeight: "100vh" }}
      >
        {/* {showSpinner ? (
          <div className={classes.loader}>
            <CircularProgress />
          </div>
        ) : null} */}
        <form ref={form} onSubmit={handleSubmit}>
          <Grid
            container
            spacing={5}
            style={{
              maxHeight: "100%",
            }}
          >
            {/* product images gallery */}
            <Grid item xs={12} lg={6}>
              <ImageCarousel images={images} />
            </Grid>

            {/* product details */}
            <Grid container item xs={12} lg={6}>
              <Grid item xs={12}>
                <Tooltip title={product.name} arrow>
                  <Typography variant="h2" className={classes.productName}>
                    {product.name}
                  </Typography>
                </Tooltip>
                <Typography variant="h3">
                  {formatter.format(product.price.raw + selectedOptionsPrice)}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Divider
                  variant="middle"
                  style={{ marginTop: "36px", marginBottom: "36px" }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h5">Përshkrimi i produktit:</Typography>
                <Typography variant="body1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `${product.description}`,
                    }}
                  ></span>
                </Typography>
              </Grid>

              {product.variants?.length ? (
                <Grid item xs={12} style={{ marginTop: "36px" }}>
                  <Typography variant="h5">
                    Variantet e disponueshme:
                  </Typography>
                  <Grid container spacing={1}>
                    {product.variants.map((variant) => (
                      <ProductVariants key={variant.id} variant={variant} />
                    ))}
                  </Grid>
                </Grid>
              ) : null}

              <Grid item xs={12} align="right" style={{ marginTop: "36px" }}>
                <Button
                  size="large"
                  variant="contained"
                  disableElevation
                  color="secondary"
                  type="submit"
                  style={{ minWidth: "250px" }}
                >
                  Shto në shportë
                </Button>
              </Grid>
              {cart.line_items?.length > 0 && (
                <Grid item xs={12} align="right" style={{ marginTop: "6px" }}>
                  <Link to="/cart">
                    <Button
                      size="large"
                      variant="outlined"
                      disableElevation
                      color="primary"
                      style={{ minWidth: "250px" }}
                    >
                      Shiko Shportën
                    </Button>
                  </Link>
                </Grid>
              )}

              {product.related_products?.length ? (
                <>
                  <Grid item xs={12}>
                    <Divider
                      variant="middle"
                      style={{ marginTop: "36px", marginBottom: "36px" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5">Produkte të ngjashme:</Typography>
                    <Grid container spacing={1}>
                      {product.related_products.map((product) => (
                        <Grid
                          key={product.id}
                          item
                          xs={6}
                          style={{ marginTop: "26px" }}
                        >
                          <Product
                            product={product}
                            handleClick={() => setProductInDrawer(product.id)}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </>
              ) : null}
            </Grid>
          </Grid>
        </form>
      </div>
    </Drawer>
  );
};

export default ProductDrawer;
