import React from "react";
import { Backdrop as MuiBackdrop, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Backdrop = () => {
  const classes = useStyles();
  const open = useSelector((state) => state.backdrop);
  return (
    <MuiBackdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </MuiBackdrop>
  );
};

export default Backdrop;
