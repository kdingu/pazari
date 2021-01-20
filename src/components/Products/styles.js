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
  main: {
    width: "100%",
    paddingTop: "10%",
    paddingBottom: "10%",
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
