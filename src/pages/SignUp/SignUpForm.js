import React from "react";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { signUpData } from "../../services/user";


import Box              from '@mui/material/Box';
import TextField        from '@mui/material/TextField';
import Button           from '@mui/material/Button';
import IconButton       from '@mui/material/IconButton';
import InputAdornment   from '@mui/material/InputAdornment';
import Visibility       from '@mui/icons-material/Visibility';
import VisibilityOff    from '@mui/icons-material/VisibilityOff';

const SignUpForm = () => {
  const history = useHistory();

  const [form, onChange, clear] = useForm({
    name:             "",
    email:            "",
    cpf:              "",
    password:         "",
    passwordConfirma: "",

  });

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
    showPassword: !values.showPassword,
    });
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const onSubmitForm = (event) => {
    event.preventDefault();
    signUpData(form, clear, history);
  };

  return (

    <form onSubmit={onSubmitForm}>


    <Box sx={{
      display:        'flex', 
      flexDirection:  'column',
      width:          '50vw',
      height:         '60vh',
      alignItems:     'center',
      justifyContent: 'space-around'
    }} >


      <Box sx={{width:'80vw'}}>
      <TextField
        fullWidth
        required 
        label='Nome'
        type='text'
        name={'name'}
        value={form.name}
        onChange={onChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">Nome e sobrenome</InputAdornment>,
        }}
        />
      </Box>

      <Box sx={{width:'80vw'}}>
      <TextField
        fullWidth
        required 
        label='Email'
        type='email'
        variant="outlined" 
        name={'email'}
        value={form.email}
        onChange={onChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">email@email.com</InputAdornment>,
        }}
      />
      </Box>

      <Box sx={{width:'80vw'}}>
      <TextField
        fullWidth
        required 
        label='CPF'
        type='number'
        name={'cpf'}
        value={form.cpf}
        onChange={onChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">000.000.000-00</InputAdornment>,
        }}
      />
      </Box>

      <Box sx={{width:'80vw'}}>
      <TextField 
        fullWidth
        required
        label='Senha'
        type= {values.showPassword ? 'text':'password'}
        variant="outlined" 
        name={'password'}
        value={form.password}
        onChange={onChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">Mínimo 6 caracteres</InputAdornment>,
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}>
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </Box>      

      <Box sx={{width:'80vw'}}>
      <TextField 
        fullWidth
        required
        label='Confirmar senha'
        type= {values.showPassword ? 'text':'password'}
        variant="outlined" 
        name={'passwordConfirma'}
        value={form.passwordConfirma}
        onChange={onChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">Confirme a senha anterior</InputAdornment>,
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}>
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </Box>

      <Box  type={'submit'} sx={{display:'flex', justifyContent:'center', marginTop:'1vh' }} >
        <Button  variant='contained' type='submit' size='large'> Criar </Button>
      </Box>

    </Box>
    </form>



  );
};

export default SignUpForm;
