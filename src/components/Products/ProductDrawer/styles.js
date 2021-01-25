import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    width: "80vw",
    padding: 56,
    [theme.breakpoints.down("sm")]: {
      padding: 16,
      paddingTop: 106,
    },
    paddingTop: 106,
  },
  loader: {
    zIndex: 1000,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productName: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  productPrice: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  btn: {
    minWidth: "250px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
    },
  },
}));
