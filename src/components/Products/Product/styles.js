const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: "200px",
  },
  productName: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
