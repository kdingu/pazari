import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    maxWidth: "50vw",
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
      width: "100%",
    },
  },
  wrapper: {
    minHeight: "100vh",
  },
  details: {
    marginTop: "1%",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "100px",
    paddingRight: "100px",
  },
  actions: {
    textAlign: "right",
    padding: "20px",
    width: "100%",
  },
}));
