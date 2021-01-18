import React, { useEffect, useRef } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import { Slide } from "@material-ui/core";

const slide = (props) => <Slide {...props} direction="up" />;

const MySnackbar = () => {
  const [snackPack, setSnackPack] = React.useState([]);
  const [alertType, setAlertType] = React.useState("success");
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  const totalItems = useSelector((state) => state.cart.total_items);
  const errorsCount = useSelector((state) => state.errorsCount);

  const prevItems = useRef(totalItems);
  const prevErrors = useRef();

  const showSnackbar = (message) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  useEffect(() => {
    if (errorsCount && !prevErrors.current) prevErrors.current = errorsCount;
  }, []);

  // watch changes in cart total items
  useEffect(() => {
    if (
      (totalItems &&
        prevItems.current !== totalItems &&
        totalItems !== "initial" &&
        prevItems.current !== "initial") ||
      (!totalItems && prevItems.current && prevItems.current !== "initial")
    ) {
      // show success
      prevItems.current = totalItems;
      setAlertType("success");
      showSnackbar("SHPORTA U PËRDITËSUA");
    }

    if (prevItems.current === "initial") prevItems.current = totalItems;
  }, [totalItems]);

  // watch changes in error counter
  useEffect(() => {
    if (
      (errorsCount && prevErrors.current !== errorsCount) ||
      (!errorsCount && prevErrors.current)
    ) {
      // show error
      setAlertType("error");
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

  return (
    <Snackbar
      key={messageInfo ? messageInfo.key : undefined}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      TransitionComponent={slide}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      onExited={handleExited}
    >
      <Alert
        severity={alertType}
        variant="filled"
        style={{ boxShadow: "0px 5px 10px rgba(0,0,0,0.5)" }}
      >
        {messageInfo && messageInfo.message}
      </Alert>
    </Snackbar>
  );
};

export default MySnackbar;
