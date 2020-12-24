import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main: {
    border: "1px solid red",
    width: "100%",
    minHeight: "100vh",
  },
}));
