import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {RestaurantDetailsStyle} from './RestaurantDetailsStyle'

const RestaurantDetails = () => {

    const [id, setId] = useState(3)
    const [choosedRestaurant, setChoosedRestaurant] = useState()

    useEffect(() =>{
        getDetails()
    }, [])

    const getDetails = async () =>{
        try {
        const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/{{appName}}/restaurants/${id}`)
        setChoosedRestaurant(response)
    }catch (error) {
        alert('error:', error)
    }
    }
    return (
        <RestaurantDetailsStyle>
            
        </RestaurantDetailsStyle>
    )
}

export default RestaurantDetails
