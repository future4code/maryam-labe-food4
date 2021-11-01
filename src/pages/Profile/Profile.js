import React from 'react';
import { EdditButton, InfosOrders, InfosAdress, InfosPerson, Body, History } from "./styled"


const Profile = () => {
  return (
    <Body>
      <InfosPerson>
        <p>Bruna Oliveira</p>
        <p>bruna_o@gmail.com</p>
        <p>333.333.333-33</p>
        <EdditButton />
      </InfosPerson>

      <InfosAdress>
        <p>Endereço cadastrado</p>
        <p>Rua Alessandra Vieira, 42 - Santana</p>
      </InfosAdress>

      <History>
        <p>Histórico de pedidos</p>
        <hr />
      </History>

      <InfosOrders>
        <div>
          <p>Bullguer Vila Madalena</p>
          <p>23 outubro 2019</p>
          <p>SUBTOTAL R$89,00</p>
        </div>
      </InfosOrders>

    </Body>
  )
}

export default Profile;
