import React, { useState, useLayoutEffect } from "react";
import useForm from "../../hooks/useForm";
import { loginData } from "../../services/user";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useHistory } from "react-router";
import { CircularProgress } from "@mui/material";
import { goToHome } from "../../routes/coordinator";
import { ImgSplashScreenStyle } from "./styled"
import SplashScreen from "../../img/SplashScreen.png"


const LoginForm = () => {
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
      const token = localStorage.getItem("token");
      if (token) {
        goToHome(history);
      }
    }, 1200);
  }, []);

  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    loginData(form, clear, history, setIsLoading);
    console.log(form);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return loading ? (
    <ImgSplashScreenStyle src={SplashScreen} id="loadingSplashScreen" />
  ) : (
    <form onSubmit={onSubmitForm}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          required
          margin="normal"
          label="Email"
          type="email"
          variant="outlined"
          name={"email"}
          value={form.email}
          onChange={onChange}
        />

        <TextField
          required
          label="Password"
          type={values.showPassword ? "text" : "password"}
          variant="outlined"
          name={"password"}
          value={form.password}
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box
          type={"submit"}
          sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
        >
          <Button
            style={{ minWidth: "343px" }}
            variant="contained"
            type="submit"
            size="large"
          >
            {isLoading ? (
              <CircularProgress color={"inherit"} size={24} />
            ) : (
              <>Entrar</>
            )}
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default LoginForm;
