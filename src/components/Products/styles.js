import { makeStyles } from "@material-ui/core/styles";
import bg from "../../assests/pazari-bg.svg";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundImage: `url(${bg})`,
      backgroundSize: "300%",
      backgroundPosition: "center center",
      opacity: "0.3",
      zIndex: "-1",
    },
  },
  latestProductsContainer: {
    minHeight: "48vh",
    [theme.breakpoints.down("md")]: {
      height: "100vh",
    },
    position: "relative",
    "&:hover::after": {
      opacity: 0,
    },
    "&::after": {
      pointerEvents: "none",
      transition: "opacity 300ms ease-out",
      content: "'Më të fundit'",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: 40,
      letterSpacing: "3px",
      fontWeight: 200,
      textTransform: "uppercase",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.65)",
    },
  },
  latestGridItem: {
    border: "1px solid black",
    [theme.breakpoints.down("md")]: {
      height: "50%",
    },
  },
  main: {
    width: "100%",
    paddingTop: "5%",
    paddingBottom: "5%",
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 6,
    marginBottom: 26,
  },
  title: {
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontWeight: "200",
    fontSize: "25px",
  },
  progressBar: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  pagination: {
    "& ul": {
      justifyContent: "center",
    },
  },
}));
