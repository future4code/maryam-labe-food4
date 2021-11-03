import React from "react";
import SignUpForm from "./SignUpForm";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import logo from '../../components/img/logo.svg';
import useUnprotectedPage from "../../hooks/useUnprotectedPage";



const SignUp = () => {
  useUnprotectedPage()

  return (

    <Box
      sx={{
        display: 'flex',
        marginTop: '3vh',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'primary.lighter',
        width: '100%',
        height: '85vh'
      }}>

      <img src={logo} alt="logo" />
      <Typography color="textPrimary" variant="h6"> Cadastrar </Typography>

      <SignUpForm />


    </Box>
  );
};

export default SignUp;
