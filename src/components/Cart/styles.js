import { makeStyles } from "@material-ui/core/styles";
import bg from "../../assests/pazari-bg.svg";

export default makeStyles((theme) => ({
  container: {
    paddingBottom: 16,
    minHeight: "100vh",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundImage: `url(${bg})`,
      backgroundSize: "300%",
      backgroundPosition: "center center",
      zIndex: "-1",
      opacity: "0.3",
    },
  },
  main: {
    marginBottom: "5%",
  },
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%",
  },
  subtotal: {
    margin: 0,
    padding: 0,
    textTransform: "uppercase",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  cardDetails: {
    display: "flex",
    marginTop: "3%",
    width: "100%",
    padding: "10px",
    justifyContent: "space-between",
  },
}));
