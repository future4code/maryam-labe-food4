import React, { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";
import { Body } from './styled';
import { useHistory } from "react-router-dom"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import useProtectedPage from "../../hooks/useProtectedPage"
import Header from "../../components/Header/Header";


const Address = () => {
    useProtectedPage()
    const { onSendAddressForm, form, onChange } = useContext(GlobalContext);
    const history = useHistory()

    return (
        <Body onSubmit={(event) => onSendAddressForm(event, history)}>
            
            <Header title="Endereço" />
            <br />

            <TextField
                placeholder={"Rua/Av"}
                name={"street"}
                value={form.street}
                onChange={onChange}
                required
                type={"text"}
                label="Logradouro"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                sx={{
                    width: '93%',
                    marginBottom: 1.5,
                }}
            />
            <TextField
                placeholder={"Número"}
                name={"number"}
                value={form.number}
                onChange={onChange}
                required
                type={"number"}
                label="Número"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                sx={{
                    width: '93%',
                    marginBottom: 1.5,
                }}
            />
            <TextField
                placeholder={"Apto./Bloco"}
                name={"complement"}
                value={form.complement}
                onChange={onChange}
                required
                type={"text"}
                label="Apto./Bloco"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                sx={{
                    width: '93%',
                    marginBottom: 1.5,
                }}
            />
            <TextField
                placeholder={"Bairro"}
                name={"neighbourhood"}
                value={form.neighbourhood}
                onChange={onChange}
                required
                type={"text"}
                label="Bairro"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                sx={{
                    width: '93%',
                    marginBottom: 1.5,
                }}
            />
            <TextField
                placeholder={"Cidade"}
                name={"city"}
                value={form.city}
                onChange={onChange}
                required
                type={"text"}
                label="Cidade"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                sx={{
                    width: '93%',
                    marginBottom: 1.5,
                }}
            />
            <TextField
                placeholder={"Estado"}
                name={"state"}
                value={form.state}
                onChange={onChange}
                required
                type={"text"}
                label="Estado"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                sx={{
                    width: '93%',
                    marginBottom: 1.5,
                }}
            />
            <Button
            type={'submit'}
                sx={{
                    width: '93%',
                    marginBottom: 1.5,
                }}
                variant="contained">
                Salvar

            </Button>

        </Body>
    )
}

export default Address;
