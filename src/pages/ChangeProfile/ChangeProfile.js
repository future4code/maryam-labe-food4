import useProtectedPage from "../../hooks/useProtectedPage"
import { ProfileBox, Body } from "./styled"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";
import { useHistory } from "react-router"
import Header from "../../components/Header/Header"


const ChangeProfile = () => {
    useProtectedPage()
    const { form, onChange, onSendUpdateProfileForm } = useContext(GlobalContext);
    const history = useHistory()


    return (
        <Body onSubmit={(event) => onSendUpdateProfileForm(event, history)}>

            <Header title="Editar" />
            <br />

            <TextField
                placeholder={"Nome"}
                name={"name"}
                value={form.name}
                onChange={onChange}
                required
                type={"text"}
                label="Nome"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                sx={{
                    width: '93%',
                    marginBottom: 1.5,
                }}
            />

            <TextField
                placeholder={"E-mail"}
                name={"email"}
                value={form.email}
                onChange={onChange}
                required
                type={"email"}
                label="E-mail"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                sx={{
                    width: '93%',
                    marginBottom: 1.5,
                }}
            />

            <TextField
                placeholder={"CPF"}
                name={"cpf"}
                value={form.cpf}
                onChange={onChange}
                required
                type={"number"}
                label="CPF"
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
        </Body >
    )
}

export default ChangeProfile;
