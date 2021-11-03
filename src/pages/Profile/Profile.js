import { EdditButton, InfosOrders, InfosAdress, InfosPerson, Body, History } from "./styled"
import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";
import useProtectedPage from "../../hooks/useProtectedPage"


const Profile = () => {
  const token = localStorage.getItem("token")
  const { getFullAddress, userInfos, getProfile, userAddress, getOrdersHistory, ordersHistory } = useContext(GlobalContext);

  useEffect(() => {
    getFullAddress()
    getProfile()
    getOrdersHistory()
  }, [token])

  return (
    <Body>
      <InfosPerson>
        <p>{userInfos && userInfos.name}</p>
        <p>{userInfos && userInfos.email}</p>
        <p>{userInfos && userInfos.cpf}</p>
        <EdditButton />
      </InfosPerson>

      <InfosAdress>
        <p>Endereço cadastrado</p>
        <p>{userAddress && userAddress.street}, {userAddress && userAddress.number} - {userAddress && userAddress.neighbourhood}</p>
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
