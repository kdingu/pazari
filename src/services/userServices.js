import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "https://api.chec.io/v1/customers/";

class UserServices {
  listOrdersForCustomer = (customerId) => {
    return axios.get(`${API_URL}${customerId}/orders`, {
      headers: authHeader(),
    });
  };

  getOrderForCustomer = (customerId, orderId) => {
    return axios.get(`${API_URL}${customerId}/orders/${orderId}`, {
      headers: authHeader(),
    });
  };
}

export default new UserServices();
