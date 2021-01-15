const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    "&:hover": {
      boxShadow: "0 0 15px -5px rgba(0,0,0,0.3)",
    },
    "& button": {
      "& div:first-of-type": {
        overflow: "hidden",
      },
    },
  },
  media: {
    minHeight: "200px",
    top: "50% !important",
    transform: "translateY(-50%)",
  },
  productName: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
