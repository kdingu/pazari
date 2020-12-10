import { makeStyles } from "@material-ui/core/styles";
import { MAX_CONTENT_WIDTH } from "../../constant.js";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main: {
    maxWidth: MAX_CONTENT_WIDTH,
    width: "100%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  progressBar: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));
