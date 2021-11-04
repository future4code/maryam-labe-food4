import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAddress, goToHome, goToProfile } from "../routes/coordinator";

export const signUpData = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      goToProfile(history);
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
      localStorage.setItem("token", res.data.token);
      if (res.data.user.hasAddress) {
        goToHome(history);
      } else {
        goToAddress(history);
      }
      clear();
    })
    .catch((err) => {
      console.log(err);
    });
};
