import { Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation, Redirect } from "react-router-dom";
import useStyles from "./styles";
import { generalActions } from "../../../store/actions";
import { useDispatch } from "react-redux";
import { exchangeTokenForJWT } from "../../../services";

const CustomerAuthentication = () => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [message, setMessage] = useState("Në pritje...");
  const dispatch = useDispatch();

  const { search } = useLocation();
  const { token } = queryString.parse(search);

  // show backdrop on component mount
  useEffect(() => {
    document.title = "Pazari - Autentikimi i klientit";

    const exchangeToken = async (token) => {
      try {
        // get JWT for customer from api
        const response = await exchangeTokenForJWT(token);
        dispatch(generalActions.setCustomerId(response.data.customer_id));
        setMessage("Sukses");
        setTimeout(() => {
          setRedirect(true);
        }, 2000);
      } catch (error) {
        dispatch(generalActions.setBackdrop(false));
        setMessage("Problem");
        console.log(error);
      }
    };

    dispatch(generalActions.setBackdrop(true));
    if (token) {
      exchangeToken(token);
    }
  }, []);

  return redirect ? (
    <Redirect to="/customer_orders" state={123456} />
  ) : (
    <>
      <Container className={classes.main}>
        <Typography variant="h4">{message}</Typography>
      </Container>
    </>
  );
};

export default CustomerAuthentication;
