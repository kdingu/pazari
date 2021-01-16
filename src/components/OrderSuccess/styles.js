import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  mainWrapper: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    position: "relative",
    textAlign: "center",
  },
  paper: {
    padding: "20px",
    maxWidth: "450px",
    border: "1px solid #333",
  },
  orderRef: {
    backgroundColor: theme.palette.secondary.dark,
    paddingLeft: "13px",
    paddingRight: "13px",
    borderRadius: "20px",
  },
  body: {
    border: "1px solid rgba(0,0,0,0.1)",
    marginTop: "20px",
    padding: "20px",
    maxWidth: "300px",
  },
  img: {
    zIndex: "-1",
    position: "absolute",
    top: "50%",
    left: "100%",
    transform: "translate(-50%,-50%)",
  },
  subtitle: {
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "20px",
  },
}));
