import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    position: "relative",
    overflow: "hidden",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  grid: {
    width: "100%",
    maxWidth: "1000px",
    height: "100%",
    maxHeight: "160px",
  },
  mainBackgroundImage: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "110%",
    minHeight: "100%",
    zIndex: "-1",
    // filter: "blur(5px)",
  },
  input: {
    color: "white",
  },
  textfield: {
    marginRight: "5px",
    width: "100%",
    color: "white",
  },
}));
