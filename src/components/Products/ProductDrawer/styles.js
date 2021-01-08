import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    width: "80vw",
    padding: 56,
  },
  loader: {
    zIndex: 1000,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
