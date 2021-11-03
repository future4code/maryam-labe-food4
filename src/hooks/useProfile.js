
import { useState }     from "react";
import axios            from "axios";
import { BASE_URL }     from "../constants/urls";
import { goToAddress }  from "../routes/coordinator";
import {useEffect}      from 'react';



const useProfile = (token) => {
    const [userInfos, setUserInfos]         = useState({})

    useEffect(  ()  =>  {

    axios.get(`${BASE_URL}/profile`, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
        .then((response) => {
            console.log(response.data)
            setUserInfos({
                id: response.data.user.id,
                name: response.data.user.name,
                email: response.data.user.email,
                cpf: response.data.user.cpf,
                hasAddress: response.data.user.hasAddress,
                address: response.data.user.address
            })
        })
        .catch((error) => {
            console.log(error.response)
        })

    },[token])

        return userInfos

}

export default useProfile