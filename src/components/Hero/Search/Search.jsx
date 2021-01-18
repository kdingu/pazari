import {
  Button,
  createMuiTheme,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generalActions, productActions } from "../../../store/actions";
import useStyles from "./styles";

const theme = createMuiTheme({
  overrides: {
    //search bar
    MuiInputLabel: {
      root: {
        color: "white",
        "&$focused": {
          color: "white",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        "&:hover": {
          "& $notchedOutline": {
            borderColor: "white",
          },
        },
        "&.Mui-focused": {
          "& $notchedOutline": {
            borderColor: "white",
          },
        },
        backgroundColor: "rgba(255,255,255,0.2)",
      },
      notchedOutline: {
        borderColor: "white",
      },
    },

    // search button
    MuiButton: {
      root: {
        width: "30%",
        border: "1px solid white",
      },
    },
  },

  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(132, 241, 241, 1)",
      dark: "rgba(62, 214, 218, 1)",
      main: "rgba(63, 165, 255, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(208, 242, 228, 1)",
      dark: "rgba(132, 241, 197, 1)",
      main: "rgba(38, 162, 112, 1)",
      contrastText: "#fff",
    },
    success: {
      light: "rgba(208, 242, 228, 1)",
      dark: "rgba(132, 241, 197, 1)",
      main: "rgba(38, 162, 112, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "rgba(255, 156, 156, 1)",
      main: "rgba(255, 1, 1, 1)",
      dark: "rgba(141, 0, 0, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  const [noSearchResults, setNoSearchResults] = useState(false);
  const filter = useSelector((state) => state.products.searchString);

  const handleSearch = () => {
    dispatch(generalActions.setBackdrop(true));
    dispatch(productActions.search(searchString))
      .then(() => {
        dispatch(generalActions.setBackdrop(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(generalActions.setBackdrop(false));
        setNoSearchResults(true);
      });
  };

  const cleanSearch = () => {
    dispatch(generalActions.setBackdrop(true));
    dispatch(productActions.search(""))
      .then(() => {
        dispatch(generalActions.setBackdrop(false));
        setSearchString("");
      })
      .catch(() => {
        dispatch(generalActions.setBackdrop(false));
      });
  };

  return (
    <Grid container item xs={12} className={classes.main}>
      <Grid item xs={12}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          style={{ display: "flex" }}
        >
          <ThemeProvider theme={theme}>
            <TextField
              label="Kërko një produkt"
              variant="outlined"
              InputProps={{
                type: "search",
                className: classes.input,
              }}
              className={classes.textfield}
              value={searchString}
              onChange={(e) => {
                if (noSearchResults) setNoSearchResults(false);
                setSearchString(e.target.value);
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disableElevation
            >
              Kërko
            </Button>
          </ThemeProvider>
        </form>
      </Grid>
      <Grid item xs={12}>
        {noSearchResults && (
          <Typography variant="subtitle1" className={classes.infoText}>
            Asnjë rezultat. Kërko diçka tjetër.
          </Typography>
        )}
        {filter && (
          <Typography variant="subtitle1" className={classes.infoText}>
            Rezultati për: "{filter}" &nbsp;&nbsp;&nbsp;
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              onClick={cleanSearch}
            >
              Fshi filtrin
            </Button>
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Search;
