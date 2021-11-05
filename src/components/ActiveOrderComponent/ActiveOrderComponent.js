import React, { useEffect, useContext } from 'react';
import AlertClockImg from '../../img/alertClockImg.png';
import {GlobalContext}  from "../../contexts/GlobalContext";
import {ActiveOrderComponentStyle} from './ActiveOrderComponentStyle'


const ActiveOrderComponent = () => {

    const { activeOrder, setActiveOrder, getActiveOrder } = useContext(GlobalContext);

    return (
        <div>
        {activeOrder ? (
            <ActiveOrderComponentStyle>
            <div>
            <img src={AlertClockImg}/>
            </div>
            <div>
                {console.log(activeOrder)}
                <h5>Pedido em andamento</h5>
                <p>{activeOrder.restaurantName}</p>
                <p>SUBTOTAL R$ {activeOrder.totalPrice}</p>
            </div>
            </ActiveOrderComponentStyle>
            ) : (null)}
        </div>
    )
}

export default ActiveOrderComponent
