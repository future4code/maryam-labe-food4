import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { goToSignUp } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

import LoginForm from "./LoginForm";
import logo from '../../components/img/logo.svg';
import useUnprotectedPage from "../../hooks/useUnprotectedPage";



const Login = () => {
  const history = useHistory();
  useUnprotectedPage()

  return (

    <Box
      sx={{
        border: '1px solid black',
        display: 'flex',
        marginTop: '3vh',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'primary.lighter',
        width: '375px',
        height: '100vh',
        m: '0'
      }}>


      <Box sx={{ marginTop: '88px', marginBottom: '16px' }}>
        <img src={logo} alt="logo" />
      </Box>

      <Typography color="textPrimary" variant="body1"> Entrar </Typography>

      <LoginForm />

      <br />

      <Button onClick={() => goToSignUp(history)} variant="text" color='secondary' >
        Não possui cadastro? Clique aqui
      </Button>


    </Box>
  );
};

export default Login;
