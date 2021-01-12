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
      backgroundSize: "cover",
      backgroundPosition: "center center",
      zIndex: "-1",
      filter: "blur(5px)",
    },
  },
  main: {
    width: "100%",
    paddingTop: "5%",
    paddingBottom: "5%",
  },
  progressBar: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));
