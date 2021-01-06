const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    "&:hover": {
      boxShadow: "0 0 15px -5px rgba(0,0,0,0.3)",
    },
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
