import { BASE_URL } from "../constants/urls"
import axios from "axios"

export const putAddAddress = (form) => {

    const body = {
        street: form.street,
        number: form.number,
        neighbourhood: form.neighbourhood,
        city: form.city,
        state: form.state,
        complement: form.complement,
    }
    axios.put(`${BASE_URL}/address`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
}