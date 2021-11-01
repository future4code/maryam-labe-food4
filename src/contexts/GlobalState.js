import React, { useEffect } from "react"
import { GlobalContext } from "./GlobalContext"
import useForm from "../hooks/useForm"
import { putAddAddress } from "../services/putAddAddress"
import { getFullAddress } from "../services/getFullAddress"


const GlobalState = (props) => {
    const [form, onChange, clear] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })
    const token = localStorage.getItem("token")

    // Requisição para pegar endereço do usuário;

    // useEffect(() => {
    //     getFullAddress()
    // }, [token])


    // Atualização de endereço (tela Address.js);

    const onSendAddressForm = (event, history) => {
        console.log(`Formulário funcionou!`, form)
        event.preventDefault()
        clear()
        console.log(token)
        putAddAddress(form)
        // signUp(history)
        getFullAddress()
    }

    return (
        <GlobalContext.Provider value={{ onSendAddressForm, onChange, form }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState