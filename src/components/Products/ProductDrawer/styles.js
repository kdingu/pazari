import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  loader: {
    zIndex: 1000,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(255,255,255,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    maxWidth: "1200px",
    minWidth: "40vw",
    [theme.breakpoints.down("md")]: {
      maxWidth: "70vw",
      minWidth: "60vw",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80vw",
      minWidth: "70vw",
    },
    backgroundColor: theme.palette.background.default,
    "& .productimage": {
      height: "550px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .image-gallery-content .image-gallery-slide .image-gallery-image": {
      height: "550px",
    },
  },
  wrapper: {
    minHeight: "100vh",
  },
  imageContainer: {
    paddingLeft: "100px",
    paddingRight: "100px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  details: {
    marginTop: "1%",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "100px",
    paddingRight: "100px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "10px",
      paddingRight: "10px",
      textAlign: "center",
    },
  },
  actions: {
    textAlign: "right",
    padding: "20px",
    width: "100%",
  },
  productTitle: {
    marginBottom: 36,
  },
  mainDetails: {
    marginBottom: 36,
  },
  description: {
    [theme.breakpoints.up("md")]: {
      paddingRight: 36,
    },
  },
}));
