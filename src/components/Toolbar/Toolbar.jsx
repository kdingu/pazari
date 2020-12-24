import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/actions";
import useStyles from "./styles";

const Toolbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  return (
    <Container maxWidth={false} className={classes.main}>
      <Container>
        <Grid container className={classes.innerGrid}>
          {categories.map((cat) => (
            <Grid key={cat.id} item xs={6} lg={3}>
              <Button
                onClick={() =>
                  dispatch(productActions.searchByCategoryId(cat.id))
                }
                className={classes.button}
              >
                {cat.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Toolbar;
