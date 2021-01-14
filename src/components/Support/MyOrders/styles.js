import { makeStyles } from "@material-ui/core/styles";
import bg from "../../../assests/pazari-bg.svg";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main: {
    padding: "20px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
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
  paper: {
    padding: "20px",
    width: "100%",
    maxWidth: "400px",
  },
}));
