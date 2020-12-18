import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 160,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    paddingTop: "10px",
  },
  cardHeader: {
    padding: "5px 0",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  productName: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "center",
    width: "100%",
  },
  price: {
    width: "100%",
    textAlign: "center",
  },
}));
