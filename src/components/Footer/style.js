import { makeStyles, fade } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    color: theme.palette.primary.contrastText,
    padding: "0",
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0px -10px 15px rgba(0,0,0,0.15)",
  },
  content: {
    padding: "20px",
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  signature: {
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderTop: "1px solid rgba(0,0,0,1)",
  },
}));
