import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import Product from "./Product/Product";
import Hero from "../Hero/Hero";
import Toolbar from "../Toolbar/Toolbar";
import ProductDrawer from "./ProductDrawer/ProductDrawer";

import useStyles from "./styles";
import { Pagination } from "@material-ui/lab";
import { generalActions, productActions } from "../../store/actions";

const Products = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { data, meta } = useSelector((state) => state.products);

  const handlePageChange = (page) => {
    if (page === meta.pagination.current_page) return null;

    dispatch(generalActions.setBackdrop(true));
    dispatch(productActions.goToPage(page))
      .then(() => {
        dispatch(generalActions.setBackdrop(false));
      })
      .catch((error) => {
        dispatch(generalActions.setBackdrop(false));
      });
  };

  useEffect(() => {
    document.title = "Pazari";
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Hero
        withSearch
        noShadow
        chosenHeight={550}
        imageUrl={
          "https://images.unsplash.com/photo-1552083974-186346191183?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=40"
        }
      />
      {/* <Categories /> */}
      <Toolbar />

      {/* Single Product View */}
      <ProductDrawer />

      <Container className={classes.main}>
        <Grid container spacing={2} className={classes.big}>
          {data.length
            ? data.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product raised product={product} />
                </Grid>
              ))
            : [1, 2, 3, 4].map((a, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <Product raised dummy />
                </Grid>
              ))}
          {meta.pagination?.total_pages > 1 ? (
            <Grid item xs={12} style={{ marginTop: "36px" }}>
              <Pagination
                className={classes.pagination}
                count={meta.pagination.total_pages}
                page={meta.pagination.current_page}
                onChange={(e, page) => handlePageChange(page)}
                color="primary"
              />
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
