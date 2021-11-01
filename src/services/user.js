import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAddress } from "../routes/coordinator";


export const signUpData = (body, clear, history) => {

  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      console.log(res.data);
      goToAddress(history);
      clear();
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};

export const loginData = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      console.log(res.data);
      clear();
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};
