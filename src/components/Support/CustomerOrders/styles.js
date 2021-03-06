import { makeStyles } from "@material-ui/core/styles";
import bg from "../../../assests/pazari-bg.svg";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main: {
    paddingTop: "5%",
    paddingBottom: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      opacity: "0.3",
      zIndex: "-1",
    },
  },
  mainMaxxedOut: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      backgroundImage: `url(${bg})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      opacity: "0.3",
      zIndex: "-1",
    },
  },
  noOrdersPaper: {
    padding: "20px",
    minHeight: "200px",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));
