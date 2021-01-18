import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Search from "./Search/Search";

const bg =
  "https://images.unsplash.com/photo-1561211919-1947abbbb35b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=40";

const Hero = ({
  title = "Pazari",
  chosenHeight = "250px",
  imageUrl = bg,
  withSearch = false,
  noShadow = false,
}) => {
  const classes = useStyles();

  const stylesWithoutShadow = {
    maxHeight: chosenHeight,
  };
  const stylesWithShadow = {
    maxHeight: chosenHeight,
    boxShadow: "0px 10px 15px rgba(0,0,0,0.45)",
  };

  return (
    <div
      className={classes.main}
      style={noShadow ? stylesWithoutShadow : stylesWithShadow}
    >
      <img
        className={classes.mainBackgroundImage}
        alt="hero background image"
        src={imageUrl}
      />
      <div className={classes.overlay} />
      <Grid
        className={classes.grid}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography
            style={{ fontWeight: "bold", color: "#fff" }}
            variant="h3"
            component="h1"
            align={!withSearch ? "center" : "left"}
          >
            {title}
          </Typography>
          {withSearch && <Search />}
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
