import { BASE_URL } from "../constants/urls"
import axios from "axios"

export const getFullAddress = () => {

    axios.put(`${BASE_URL}/profile/address`, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
}