import { makeStyles } from "@material-ui/core/styles";
import bg from "../../../../assests/pazari-bg.svg";

export default makeStyles((theme) => ({
  headingsContainer: {
    marginTop: 26,
    boxShadow: "0 5px 10px rgba(0,0,0,0.25)",
    border: "1px solid rgba(0, 0, 0, .125)",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textTransform: "uppercase",
    alignItems: "center",
    minHeight: 56,
    paddingLeft: 16,
    paddingRight: 16,
  },
  listContainer: {
    boxShadow: "0 5px 10px rgba(0,0,0,0.25)",
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.default,
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "300%",
    height: "600px",
    overflow: "scroll",
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
