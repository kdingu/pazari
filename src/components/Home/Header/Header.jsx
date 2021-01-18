import { Container, Grid, InputBase } from "@material-ui/core";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <Container
      component={Grid}
      container
      justify="center"
      alignItems="center"
      maxWidth={false}
      disableGutters
      className={classes.container}
    >
      <Grid item xs={6}>
        <InputBase
          placeholder="Search…"
          className={classes.searchInput}
          inputProps={{ "aria-label": "search" }}
        />
      </Grid>
    </Container>
  );
};

export default Header;
