import React from "react";
import useStyles from "./styles";

const OrderSuccess = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <div>FALEMINDERIT!</div>
    </>
  );
};

export default OrderSuccess;
