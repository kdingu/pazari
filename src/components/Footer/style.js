import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    color: "#0f0f0f",
    padding: "0",
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0px -10px 15px rgba(0,0,0,0.15)",
  },
  signature: {
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundColor: theme.palette.background.light,
  },
  menu: {
    maxWidth: 500,
    margin: "auto",
  },
  item: {
    color: theme.palette.primary.contrastText,
    minHeight: "70px",
    width: "100%",
    borderRadius: 0,
  },
}));
