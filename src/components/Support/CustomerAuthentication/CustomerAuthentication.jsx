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

  useEffect(() => {
    document.title = "Pazari - Autentikimi i klientit";
    const exchangeToken = async () => {
      if (token) {
        try {
          dispatch(generalActions.setBackdrop(true));
          // get JWT for customer from api
          const response = await exchangeTokenForJWT(token);
          dispatch(generalActions.setCustomerId(response.data.customer_id));
          setMessage(
            "Sukses, Po ju ridrejtojmë tek faqja e historisë së blerjeve..."
          );
          setTimeout(() => {
            setRedirect(true);
          }, 2000);
        } catch (error) {
          dispatch(generalActions.setBackdrop(false));
          setMessage("Problem");
          console.log(error);
        }
      }
    };
    exchangeToken();
    // eslint-disable-next-line
  }, []);

  return redirect ? (
    <Redirect to="/customer_orders" />
  ) : (
    <>
      <Container className={classes.main}>
        <Typography variant="h5">{message}</Typography>
      </Container>
    </>
  );
};

export default CustomerAuthentication;
