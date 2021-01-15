import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1000,
    color: "#fff",
  },
}));
