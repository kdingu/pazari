import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/actions";
import { Container, Grid, CircularProgress, Button } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import Product from "./Product/Product";
import Hero from "../Hero/Hero";
import Toolbar from "../Toolbar/Toolbar";

import useStyles from "./styles";

const Products = () => {
  const [loadingMore, setLoadingMore] = useState(false);

  const { data, meta } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleLoadMoreProducts = (page) => {
    setLoadingMore(true);
    dispatch(productActions.appendProductsAsync(page + 1)).then(() =>
      setLoadingMore(false)
    );
  };

  const ProductsGrid = () => (
    <Grid container>
      <Grid container item spacing={2} className={classes.big}>
        {data.length ? (
          data.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))
        ) : (
          <div className={classes.progressBar}>
            <CircularProgress />
          </div>
        )}
      </Grid>
      {data.length &&
      meta.pagination.current_page < meta.pagination.total_pages ? (
        <Grid item style={{ marginTop: 46 }} align="center" xs={12}>
          <Button
            startIcon={<AddCircleOutline />}
            color="primary"
            size="large"
            disableElevation
            disabled={loadingMore}
            onClick={() => handleLoadMoreProducts(meta.pagination.current_page)}
          >
            {loadingMore ? "Prisni..." : "Ngarko më shumë produkte"}
          </Button>
        </Grid>
      ) : null}
    </Grid>
  );

  return (
    <>
      <div className={classes.toolbar} />
      <Hero
        withSearch
        noShadow
        chosenHeight={550}
        imageUrl={
          "https://images.unsplash.com/photo-1552083974-186346191183?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=40"
        }
      />
      <Toolbar />
      {/* <Categories /> */}
      <Container className={classes.main}>
        <ProductsGrid />
      </Container>
    </>
  );
};

export default Products;
