import { makeStyles, fade } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    // color: theme.palette.primary.contrastText,
    color: "#0f0f0f",
    padding: "0",
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0px -10px 15px rgba(0,0,0,0.15)",
  },
  content: {
    // padding: "20px",
  },
  signature: {
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    // borderTop: "1px solid #000000a0",
    // backgroundColor: "#84DCF1",
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
