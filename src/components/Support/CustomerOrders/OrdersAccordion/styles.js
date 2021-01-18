import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  headingsContainer: {
    // display: "flex",
    border: "1px solid rgba(0, 0, 0, .125)",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textTransform: "uppercase",
    alignItems: "center",
    minHeight: 56,
    paddingLeft: 16,
    paddingRight: 16,
  },
  detailsGrid: {
    border: "1px solid rgba(0, 0, 0, .125)",
    borderRadius: "5px",
    overflow: "hidden",
  },
  innerHeader: {
    backgroundColor: "#F1F6FC",
    padding: 16,
  },
  innerContent: {
    padding: 16,
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  },
  paymentDetailsGrid: {
    border: "1px solid rgba(0, 0, 0, .125)",
    borderRadius: "5px",
    overflow: "hidden",
    marginTop: 16,
  },
  subtotal: {
    padding: 16,
  },
  shipping: {
    padding: 16,
    borderTop: "1px solid rgba(0, 0, 0, .125)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
  },
  total: {
    padding: 16,
    backgroundColor: "#F1F6FC",
  },
}));
