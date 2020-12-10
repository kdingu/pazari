import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
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
  },
  caption: {
    fontSize: "0.875rem",
    color: "#758392",
    marginTop: -4,
  },
  btn: {
    // borderRadius: 20,
    // padding: "0.125rem 0.75rem",
    // borderColor: "#becddc",
    // fontSize: "0.75rem",
  },
}));
