import { useState } from "react";

export const useForm = (initialState) =>{

    const [form, setForm] = useState(initialState)

    const inputChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value})
    }

    const cleanFields = () =>{
        setForm(initialState)
    }

    return {form, inputChange, cleanFields }
}