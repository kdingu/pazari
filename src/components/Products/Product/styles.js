const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  root: {
    borderRadius: "0",
    maxWidth: "100%",
    "&:hover": {
      boxShadow: "0 0 15px -5px rgba(0,0,0,0.3)",
    },
    "& button": {
      "& div:first-of-type": {
        overflow: "hidden",
      },
    },
  },
  media: {
    minHeight: "100%",
    minWidth: "100%",
    width: "100% !important",
    height: "auto !important",
    top: "50% !important",
    transform: "translateY(-50%)",
  },
  productName: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  // latest
  latestRoot: {
    maxWidth: "100%",
    height: "100%",
    margin: "auto",
    borderRadius: 0,
    position: "relative",
  },
  actionArea: {
    height: "100%",
  },
  content: {
    overflow: "hidden",
    transition: "background-color 300ms ease-in-out",
    height: "100%",
    boxShadow: "inset 0 0 25px 3px rgba(0,0,0,0.3)",
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 24,
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0)",
    },
  },
  cta: {
    display: "block",
    textAlign: "center",
    color: "#fff",
    letterSpacing: "3px",
    fontWeight: 200,
    fontSize: 12,
    marginTop: 26,
  },
  title: {
    color: "#fff",
    letterSpacing: "2px",
    fontSize: 25,
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
