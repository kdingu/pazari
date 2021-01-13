import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    height: "60px",
    display: "flex",
    alignItems: "stretch",
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0px 10px 15px rgba(0,0,0,0.2)",
    [theme.breakpoints.down("md")]: {
      height: "max-content",
    },
  },
  innerGrid: {
    height: "100%",
  },
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    color: theme.palette.primary.contrastText,
  },
}));
