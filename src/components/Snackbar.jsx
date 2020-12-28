import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import { useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import { Slide } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

var prevItems = 0;
var prevErrors;

const slide = (props) => <Slide {...props} direction="up" />;

const MySnackbar = () => {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  const totalItems = useSelector((state) => state.cart.total_items);
  const errorsCount = useSelector((state) => state.errorsCount);

  const showSnackbar = (message) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  useEffect(() => {
    if (totalItems && !prevItems) prevItems = totalItems;
    if (errorsCount && !prevErrors) prevErrors = errorsCount;
  }, []);

  // watch changed in cart total items
  useEffect(() => {
    if (
      (totalItems && prevItems !== totalItems) ||
      (!totalItems && prevItems)
    ) {
      // show success
      showSnackbar("SHPORTA U PËRDITËSUA");
      prevItems = totalItems;
    }
  }, [totalItems]);

  // watch changes in error counter
  useEffect(() => {
    if (
      (errorsCount && prevErrors !== errorsCount) ||
      (!errorsCount && prevErrors)
    ) {
      // show error
      showSnackbar("PATI NJË PROBLEM");
    }
  }, [errorsCount]);

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const classes = useStyles();
  return (
    <Snackbar
      key={messageInfo ? messageInfo.key : undefined}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      TransitionComponent={slide}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      onExited={handleExited}
    >
      <Alert severity="success" variant="filled">
        {messageInfo && messageInfo.message}
      </Alert>
    </Snackbar>
  );
};

export default MySnackbar;
