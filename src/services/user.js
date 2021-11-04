import axios        from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAddress, goToHome } from "../routes/coordinator";

export const signUpData = (body, clear, history, setIsLoading) => {
  setIsLoading(true)
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      goToAddress(history);
      clear();
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err.response.data.message);
      setIsLoading(false)
    });
};

export const loginData = (body, clear, history, setIsLoading) => {
  setIsLoading(true)
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
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false)
    });
};
