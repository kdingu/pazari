import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    minHeight: "500px",
    backgroundColor: theme.palette.primary.dark,
  },
  grid: {
    height: "100%",
    border: "1px solid red",
  },
  searchInput: {
    border: "1px solid rgba(0,0,0,0.2)",
  },
}));
