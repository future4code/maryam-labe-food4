import { ProfileBox, MiddleContainer, EdditButton, InfosOrders, InfosAdress, InfosPerson, Body, History, Infos, TextInfos, MiddleBox, EachHistoryCardProfile } from "./styled"
import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";
import useProtectedPage from "../../hooks/useProtectedPage"
import ImageEdit from "../../assets/edit.svg"


const Profile = () => {
  const token = localStorage.getItem("token")
  const { getFullAddress, userInfos, getProfile, userAddress, getOrdersHistory, ordersHistory } = useContext(GlobalContext);

  useEffect(() => {
    getFullAddress()
    getProfile()
    getOrdersHistory()
  }, [token])

  console.log(ordersHistory)

  return (
    <Body>
      <ProfileBox>
        <p>Meu Perfil</p>
        {/* <hr /> */}
      </ProfileBox>
      <InfosPerson>
        <Infos>

          <p>{userInfos && userInfos.name}</p>
          <p>{userInfos && userInfos.email}</p>
          <p>{userInfos && userInfos.cpf}</p>

        </Infos>

        <EdditButton alt={ImageEdit} src={ImageEdit} />
      </InfosPerson>


      <MiddleBox>
        <MiddleContainer>
          <InfosAdress>
            <h4>Endereço cadastrado</h4>
            <p>{userAddress && userAddress.street}, {userAddress && userAddress.number} - {userAddress && userAddress.neighbourhood}</p>
          </InfosAdress>

          <EdditButton alt={ImageEdit} src={ImageEdit} />
        </MiddleContainer>
      </MiddleBox>


      <History>
        <p>Histórico de pedidos</p>
        <hr />
      </History>

      <InfosOrders>
        {ordersHistory && ordersHistory.map((item) => {
          return (
            <EachHistoryCardProfile key={item.createdAt}>
              <p>{item.restaurantName} </p>
              <h6>{item.createdAt}</h6>
              <h4>SUBTOTAL R$ {(item.totalPrice).toFixed(2)}</h4>
            </EachHistoryCardProfile>
          )
        })

        }


      </InfosOrders>

    </Body >
  )
}

export default Profile;
