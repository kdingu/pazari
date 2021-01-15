import axios from "axios";

const EXCHANGE_TOKEN_URL = "https://api.chec.io/v1/customers/exchange-token";

const exchangeTokenForJWT = async (token) => {
  const data = {
    token,
  };
  const config = {
    headers: {
      "X-Authorization": `${process.env.REACT_APP_CHEC_PUBLIC_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  try {
    const response = await axios.post(EXCHANGE_TOKEN_URL, data, config);

    if (response.data?.jwt) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default exchangeTokenForJWT;
