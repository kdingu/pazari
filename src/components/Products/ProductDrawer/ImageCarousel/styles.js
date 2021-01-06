import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  arrowsWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  innerClass: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBack: {
    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translate(0%, -50%)",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.3)",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  },
  buttonNext: {
    position: "absolute",
    top: "50%",
    left: "100%",
    transform: "translate(-100%, -50%)",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.3)",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  },
  thumbnail: {
    width: "100px",
    height: "100px",
    border: "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "5px",
  },
  thumbnailWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
