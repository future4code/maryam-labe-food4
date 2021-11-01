import React, { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";
import { Body } from './styled';
import { useHistory } from "react-router-dom"


const Address = () => {
    const { onSendAddressForm, form, onChange } = useContext(GlobalContext);
    const history = useHistory()

    return (
        <Body onSubmit={(event) => onSendAddressForm(event, history)}>
            <input
                placeholder={"Rua/Av"}
                name={"street"}
                value={form.street}
                onChange={onChange}
                required
                type={"text"}
            // title={`Nome de usuário deve possuir no mínimo 3 caracteres`}
            // pattern='[0-9 A-Z a-z áàâãéèêíïóôõöúçñ]{3,}'
            />
            <input
                placeholder={"Número"}
                name={"number"}
                value={form.number}
                onChange={onChange}
                required
                type={"number"}
            // title={`Nome de usuário deve possuir no mínimo 3 caracteres`}
            // pattern='[0-9 A-Z a-z áàâãéèêíïóôõöúçñ]{3,}'
            />
            <input
                placeholder={"Apto./Bloco"}
                name={"complement"}
                value={form.complement}
                onChange={onChange}
                required
                type={"text"}
            // title={`Nome de usuário deve possuir no mínimo 3 caracteres`}
            // pattern='[0-9 A-Z a-z áàâãéèêíïóôõöúçñ]{3,}'
            />
            <input
                placeholder={"Bairro"}
                name={"neighbourhood"}
                value={form.neighbourhood}
                onChange={onChange}
                required
                type={"text"}
            // title={`Nome de usuário deve possuir no mínimo 3 caracteres`}
            // pattern='[0-9 A-Z a-z áàâãéèêíïóôõöúçñ]{3,}'
            />
            <input
                placeholder={"Cidade"}
                name={"city"}
                value={form.city}
                onChange={onChange}
                required
                type={"text"}
            // title={`Nome de usuário deve possuir no mínimo 3 caracteres`}
            // pattern='[0-9 A-Z a-z áàâãéèêíïóôõöúçñ]{3,}'
            />
            <input
                placeholder={"Estado"}
                name={"state"}
                value={form.state}
                onChange={onChange}
                required
                type={"text"}
            // title={`Nome de usuário deve possuir no mínimo 3 caracteres`}
            // pattern='[0-9 A-Z a-z áàâãéèêíïóôõöúçñ]{3,}'
            />

            <button>Salvar</button>

        </Body>
    )
}

export default Address;
