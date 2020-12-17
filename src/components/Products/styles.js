import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main: {
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
