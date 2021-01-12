import React from "react";
import { useSelector } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import Product from "./Product/Product";
import Hero from "../Hero/Hero";
import Toolbar from "../Toolbar/Toolbar";
import ProductDrawer from "./ProductDrawer/ProductDrawer";

import useStyles from "./styles";
import bg from "../../assests/pazari-bg.svg";

const Products = () => {
  const classes = useStyles();

  const { data, meta } = useSelector((state) => state.products);

  const ProductsGrid = () => (
    <Grid container>
      <Grid container item spacing={2} className={classes.big}>
        {data.length &&
          data.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product raised product={product} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );

  console.log(bg);

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
        <ProductsGrid />
      </Container>
    </div>
  );
};

export default Products;
