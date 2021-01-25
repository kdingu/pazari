import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  text: {
    fontFamily: "Barlow, san-serif",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  name: {
    fontWeight: 600,
    fontSize: "1rem",
    color: "#122740",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "300px",
  },
  itemName: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "70%",
    },
  },
  caption: {
    fontSize: "0.875rem",
    color: "#758392",
    marginTop: -4,
  },
}));
