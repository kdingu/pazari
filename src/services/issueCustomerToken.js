import axios from "axios";

const ISSUE_TOKEN_URL = "https://api.chec.io/v1/customers/email-token";
// const BASE_URL = "https://pazari.netlify.app/customer_authentication?token={token}";
const BASE_URL = "http://localhost:3000/customer_authentication?token={token}";

const issueCustomerToken = async (email) => {
  const data = {
    email,
    base_url: BASE_URL,
  };
  const config = {
    headers: {
      "X-Authorization": `${process.env.REACT_APP_CHEC_PUBLIC_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  try {
    const response = await axios.post(ISSUE_TOKEN_URL, data, config);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default issueCustomerToken;
