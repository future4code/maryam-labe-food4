import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import useForm from "../hooks/useForm";
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { useHistory } from "react-router";
import { goToProfile, goToHome } from "../routes/coordinator";

const GlobalState = (props) => {
  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
    name: "",
    email: "",
    cpf: "",
    searchInput: "",
  });

  const [userInfos, setUserInfos] = useState({});
  const [userAddress, setUserAddress] = useState({});
  const [ordersHistory, setOrdersHistory] = useState([]);
  const token = localStorage.getItem("token");
  const history = useHistory();
  const [carrinho, setCarrinho] = useState();
  const [choosedItem, setChoosedItem] = useState(false);
  // Requisição para pegar alterar o perfil:

  const updateProfile = () => {
    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
    };

    axios
      .put(`${BASE_URL}/profile`, body, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        setUserInfos({
          name: response.data.user.name,
          email: response.data.user.email,
          cpf: response.data.user.cpf,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSendUpdateProfileForm = (event, history) => {
    event.preventDefault();
    clear();
    updateProfile();
    goToProfile(history);
    console.log(`FOOOOOOOOOI`);
  };

  // Requisição para pegar histórico de ordens:

  const getOrdersHistory = () => {
    axios
      .get(`${BASE_URL}/orders/history`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // console.log(`DEU CERTO o getOrdersHistory:`)
        setOrdersHistory(response.data.orders);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [foundRestaurants, setFoundRestaurants] = useState([]);

  const [choosedCategory, setChoosedCategory] = useState("");
  const [serachInputOnFocus, setSerachInputOnFocus] = useState(false);
  const [id, setId] = useState("1");
  const [choosedRestaurant, setChoosedRestaurant] = useState([]);
  const [newArray, setNewArray] = useState();
  const [category, setCategory] = useState();

  const getListOfRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(`23`, response);
        setFoundRestaurants(response.data.restaurants);
        console.log(foundRestaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Requisição para pegar os dados do usuário:

  const getProfile = () => {
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // console.log(`DEU CERTO o getProfile:`)
        setUserInfos({
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          cpf: response.data.user.cpf,
          hasAddress: response.data.user.hasAddress,
          address: response.data.user.address,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Requisição para pegar endereço do usuário;

  const getFullAddress = () => {
    axios
      .get(`${BASE_URL}/profile/address`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUserAddress({
          street: response.data.address.street,
          number: response.data.address.number,
          apartment: response.data.address.apartment,
          neighbourhood: response.data.address.neighbourhood,
          city: response.data.address.city,
          state: response.data.address.state,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Atualização de endereço (tela Address.js);

  const putAddAddress = () => {
    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement,
    };
    axios
      .put(`${BASE_URL}/address`, body, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(`DEU CERTO o putAddAddress `);
        goToProfile(history);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSendAddressForm = (event, history) => {
    event.preventDefault();
    clear();
    putAddAddress();
    getFullAddress();
    goToHome(history);
  };

  return (
    <GlobalContext.Provider
      value={{
        onSendAddressForm,
        onChange,
        form,
        userInfos,
        setUserInfos,
        getFullAddress,
        getProfile,
        userAddress,
        getOrdersHistory,
        ordersHistory,
        onSendUpdateProfileForm,
        carrinho,
        setCarrinho,
        updateProfile,
        clear,
        onSendAddressForm,
        onChange,
        form,
        userInfos,
        setUserInfos,
        getFullAddress,
        getProfile,
        userAddress,
        getOrdersHistory,
        ordersHistory,
        onSendUpdateProfileForm,
        foundRestaurants,
        setFoundRestaurants,
        choosedCategory,
        setChoosedCategory,
        getListOfRestaurants,
        serachInputOnFocus,
        setSerachInputOnFocus,
        id,
        setId,
        choosedRestaurant,
        setChoosedRestaurant,
        newArray,
        setNewArray,
        category,
        setCategory,
        carrinho,
        setCarrinho,
        choosedItem,
        setChoosedItem,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
