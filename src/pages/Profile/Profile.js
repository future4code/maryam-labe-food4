import { ProfileBox, MiddleContainer, EdditButton, InfosOrders, InfosAdress, InfosPerson, Body, History, Infos, TextInfos, MiddleBox, EachHistoryCardProfile } from "./styled"
import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";
import useProtectedPage from "../../hooks/useProtectedPage"
import ImageEdit from "../../assets/edit.svg"
import { goToProfile, goToAddress } from "../../routes/coordinator"
import { useHistory } from "react-router"

const Profile = () => {
  useProtectedPage()
  const history = useHistory()
  const token = localStorage.getItem("token")
  const { getFullAddress, userInfos, getProfile, userAddress, getOrdersHistory, ordersHistory } = useContext(GlobalContext);

  useEffect(() => {
    getFullAddress()
    getProfile()
    getOrdersHistory()
  }, [])

  console.log(ordersHistory)

  const convertDate = (timestamp) => {
    let time = new Date(timestamp)
    let day = time.getDate().toString().padStart(2, '0')
    let month = (time.getMonth() + 1).toString().padStart(2, '0')
    let year = time.getFullYear()
    return `${day}/${month}/${year}`;
  };

  return (
    <Body>
      <ProfileBox>
        <p>Meu Perfil</p>
      </ProfileBox>
      <InfosPerson>
        <Infos>

          <p>{userInfos && userInfos.name}</p>
          <p>{userInfos && userInfos.email}</p>
          <p>{userInfos && userInfos.cpf}</p>

        </Infos>

        <EdditButton alt={ImageEdit} src={ImageEdit} onClick={() => goToProfile(history)} />
      </InfosPerson>


      <MiddleBox>
        <MiddleContainer>
          <InfosAdress>
            <h4>Endereço cadastrado</h4>
            <p>{userAddress && userAddress.street}, {userAddress && userAddress.number} - {userAddress && userAddress.neighbourhood}</p>
          </InfosAdress>

          <EdditButton alt={ImageEdit} src={ImageEdit} onClick={() => goToAddress(history)} />
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
              <h6>{convertDate(item.createdAt)}</h6>
              <h4>SUBTOTAL R$ {(item.totalPrice).toFixed(2).replace('.', ',')}</h4>
            </EachHistoryCardProfile>
          )
        })

        }


      </InfosOrders>

    </Body >
  )
}

export default Profile;
