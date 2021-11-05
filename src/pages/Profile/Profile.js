import { ProfileBox, MiddleContainer, EdditButton, InfosOrders, InfosAdress, InfosPerson, Body, History, Infos, MiddleBox, EachHistoryCardProfile } from "./styled"
import { goToAddress, goToChangeProfile } from "../../routes/coordinator"
import React, { useContext, useEffect }   from "react"
import { GlobalContext }                  from "../../contexts/GlobalContext";
import useProtectedPage                   from "../../hooks/useProtectedPage"
import ImageEdit                          from "../../assets/edit.svg"
import { useHistory }                     from "react-router";
import Typography                         from '@mui/material/Typography';
import Box                                from '@mui/material/Box';


const Profile = () => {
  useProtectedPage()
  const history = useHistory()
  const { getFullAddress, userInfos, getProfile, userAddress, getOrdersHistory, ordersHistory } = useContext(GlobalContext);

  useEffect(() => {
    getFullAddress()
    getProfile()
    getOrdersHistory()
  }, [])

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
        <Typography>Meu Perfil</Typography>
      </ProfileBox>

      {userInfos && userInfos.name ? (
        <InfosPerson>
          <Infos>

            <Typography>{userInfos && userInfos.name}</Typography>
            <Typography>{userInfos && userInfos.email}</Typography>
            <Typography>{userInfos && userInfos.cpf}</Typography>

          </Infos>

          <EdditButton alt="Name" src={ImageEdit} onClick={() => goToChangeProfile(history)} />
        </InfosPerson>
      ) : (
        <Typography><br />Carregando...Aguarde<br /><br /><br /></Typography>
      )}

      <MiddleBox>
        <MiddleContainer>
          <InfosAdress>
            <Typography color="primary.cinza" variant="body1">
              Endereço cadastrado
            </Typography>
            {userAddress && userAddress.street ? (<p>{userAddress && userAddress.street}, {userAddress && userAddress.number} - {userAddress && userAddress.neighbourhood}</p>) : (<h4>Carregando... Aguarde</h4>)}
          </InfosAdress>

          <EdditButton alt="Name" src={ImageEdit} onClick={() => goToAddress(history)} />
        </MiddleContainer>
      </MiddleBox>


      <History>
        <Typography>Histórico de pedidos</Typography>
        <hr />
      </History>

      <InfosOrders>

        {!ordersHistory.length || ordersHistory.length === 0 ? (<h4>Você não realizou nenhum pedido</h4>) : (
          ordersHistory && ordersHistory.map((item) => {
            return (
              <EachHistoryCardProfile key={item.createdAt}>
                <p>{item.restaurantName} </p>
                <h6>{convertDate(item.createdAt)}</h6>
                <h4>SUBTOTAL R$ {(item.totalPrice).toFixed(2).replace('.', ',')}</h4>
              </EachHistoryCardProfile>
            )
          })
        )
        }

      </InfosOrders>
        <Box sx={{height:'10vh'}} />

    </Body >
  )
}

export default Profile;
