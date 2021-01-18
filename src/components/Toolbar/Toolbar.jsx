import { Button, Container, Grid, Tooltip } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { generalActions, productActions } from "../../store/actions";
import useStyles from "./styles";

const Toolbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const handleFilterClick = (categoryId, categoryName) => {
    dispatch(generalActions.setBackdrop(true));
    dispatch(productActions.searchByCategoryId(categoryId)).then(() => {
      dispatch(productActions.setSearchString(categoryName));
      dispatch(generalActions.setBackdrop(false));
    });
  };

  return (
    <Container maxWidth={false} className={classes.main}>
      <Container>
        <Grid container className={classes.innerGrid}>
          {categories.map((cat) => (
            <Grid key={cat.id} item xs={12} md={6} lg={3}>
              <Tooltip title={`Filtro me kategorinë: "${cat.name}"`}>
                <span>
                  <Button
                    onClick={() => handleFilterClick(cat.id, cat.name)}
                    className={classes.button}
                  >
                    {cat.name}
                  </Button>
                </span>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Toolbar;
