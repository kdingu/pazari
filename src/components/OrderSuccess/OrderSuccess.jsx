import React from "react";
import useStyles from "./styles";

const OrderSuccess = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <img
        className={classes.background}
        src="https://image.freepik.com/free-vector/hand-drawn-clapping-human-hands-doodle-set-collection-pencil-chalk-drawing-sketches-men-women-raising-arms-making-applause-isolated_160308-590.jpg"
      />
      <div className={classes.toolbar} />
      <div>FALEMINDERIT!</div>
    </div>
  );
};

export default OrderSuccess;
