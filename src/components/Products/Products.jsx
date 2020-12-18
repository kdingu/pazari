import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/actions";
import { Container, Grid, CircularProgress, Button } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import Product from "./Product/Product";
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
    <Container className={classes.main}>
      <div className={classes.toolbar} />
      <ProductsGrid />
    </Container>
  );
};

export default Products;
