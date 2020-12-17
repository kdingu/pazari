const { makeStyles } = require("@material-ui/core");

const generalMargin = "36px";

export default makeStyles((theme) => ({
  card: {
    overflowX: "hidden",
    overflowY: "scroll",
    minWidth: "400px",
    maxHeight: "400px",
    borderRadius: "3px",
    paddingBottom: generalMargin,
  },
  header: {
    color: theme.palette.text.primary,
    backgroundColor: "rgba(0, 0, 0, 0.02)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  },
  headerTitle: {
    textTransform: "uppercase",
  },
  headerLink: {
    color: theme.palette.text.primary,
  },
  headline: {
    color: "#122740",
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  emptyCartMessage: {
    marginTop: generalMargin,
  },
  link: {
    color: "#2281bb",
    padding: "0 0.25rem",
    fontSize: "0.875rem",
  },
  item: {
    backgroundColor: "#fff",
  },
  actions: {
    color: "#BDC9D7",
  },
  divider: {
    backgroundColor: "#d9e2ee",
    margin: "0 20px",
  },
  footerButton: {
    color: "#fff",
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    bottom: 0,
    width: "100%",
    height: generalMargin,
  },
  subtotal: {
    color: theme.palette.primary.contrastText,
    paddingLeft: "1rem",
  },
}));
