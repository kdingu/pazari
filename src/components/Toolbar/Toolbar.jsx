import { Button, Container, Grid, Tooltip } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/actions";
import useStyles from "./styles";

const Toolbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const [disabled, setDisabled] = useState(false);

  return (
    <Container maxWidth={false} className={classes.main}>
      <Container>
        <Grid container className={classes.innerGrid}>
          {categories.map((cat) => (
            <Grid key={cat.id} item xs={12} md={6} lg={3}>
              <Tooltip title={`Filtro me kategorinë: "${cat.name}"`}>
                <span>
                  <Button
                    disabled={disabled}
                    onClick={() => {
                      setDisabled(true);
                      dispatch(productActions.searchByCategoryId(cat.id)).then(
                        () => {
                          dispatch(productActions.setSearchString(cat.name));
                          setDisabled(false);
                        }
                      );
                    }}
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
