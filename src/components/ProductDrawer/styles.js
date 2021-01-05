import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
}));
