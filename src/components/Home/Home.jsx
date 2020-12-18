import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import Header from "./Header/Header";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Header />
    </>
  );
};

export default Home;
