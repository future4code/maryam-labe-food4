import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import {
  RestaurantDetailsStyle,
  RestauranteContainer,
  ElementContainer,
} from "./RestaurantDetailsStyle";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage"
import { GlobalContext } from "../../contexts/GlobalContext";
import { useParams } from "react-router";



const RestaurantDetails = () => {
  const {id, setId,choosedRestaurant, setChoosedRestaurant, newArray, setNewArray, category, setCategory, quantity, setQuantity, carrinho, setCarrinho } = useContext(GlobalContext)

  useProtectedPage()
  const pathParams = useParams()

  const addItensToCart = (item) =>{
    const hasTheItem = carrinho ? carrinho.filter((itemDoCarrinho, index) =>{
      if(item.id === itemDoCarrinho.id){
        return index
      } 
    }) : null

    if(hasTheItem !== [] || hasTheItem !== null){
      setCarrinho(carrinho[hasTheItem].quantity + 1)
    }else{
      carrinho.push({...item, restaurantId: pathParams.id})
    }
    console.log(carrinho, 'esse carrinho')
  }

  const handlePrice = (number) =>{
    return number.toFixed(2).replace('.', ',')
  }

  const renderOptions = () => {
    const arrayOfOptions = []
    for(let i = 0; i !== 11; i++) {
      arrayOfOptions.push(i);
    }
    return arrayOfOptions.map((option) =>{
      return (
        <option>
          {option}
        </option>
      )
    })
  };

  const renderCategorys = () => {
    return category.map((categoryName) => {
      return (
        <>
          <h2>{categoryName}</h2>
          {newArray[categoryName].map((item) => {
            return (
              <ElementContainer onclick={console.log(item)} key={item.id}>
                <div>
                  <img alt="Food" src={item.photoUrl} />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>R$ {handlePrice(item.price)}</p>
                </div>
                <div>
                  {item.quantity ? (
                    <span> {quantity} </span>
                  ) : (
                    <span style={{ display: "none" }}></span>
                  )}
                  {quantity ? (
                    <span style={{ borderColor: "red", color: "red" }}>
                      remover
                    </span>
                  ) : (
                    <span 
                    onclick={() => addItensToCart(item)}
                    >adicionar</span>
                  )}
                </div>
              </ElementContainer>
            );
          })}
        </>
      );
    });
  };

  const getDetails = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpDT0lCZUhySDVsUXZrTEZPRHVEIiwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJjcGYiOiIxMTIuMTExLjExMS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJCb25pdGEsIDEyMywgQmxvY28gMSAtIEJvbml0byIsImlhdCI6MTYzNTg3MzAwOH0.LFXJGCj6nFxn5Pz9cI-kYWupxRNQaQKCHeR554m8Uuc";

    try {
      const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/rappi4B/restaurants/${id}`,
        {
          headers: {
            auth: token,
            "Content-Type": "application/json",
          },
        }
      );
      setChoosedRestaurant([response.data.restaurant]);
      var newArray = [];
      for (let i = 0; i < response.data.restaurant.products.length; i++) {
        let category = response.data.restaurant.products[i].category;
        if (!newArray[category]) {
          newArray[category] = [];
        }
        newArray[category].push(response.data.restaurant.products[i]);
      }
      setNewArray(newArray);
      let categorys = Object.keys(newArray);
      setCategory(categorys);
    } catch (error) {
      alert("error:", error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <RestaurantDetailsStyle>
      <Header />
      {choosedRestaurant && newArray && category ? (
        <RestauranteContainer>
          <img alt="food" src={choosedRestaurant[0].logoUrl} />
          <h3>{choosedRestaurant[0].name}</h3>
          <p>{choosedRestaurant[0].category}</p>
          <div>
            <p>{choosedRestaurant[0].deliveryTime} min</p>
            <p>Frete R${choosedRestaurant[0].shipping},00</p>
          </div>
          <p>{choosedRestaurant[0].address}</p>
        </RestauranteContainer>
      ) : (
        <h1>Loading...</h1>
      )}
      {choosedRestaurant && newArray && category ? renderCategorys() : null}
      {console.log("render")}
      <aside id="popup">
        <p>Selecione a quantidade desejada</p>
        <select>{renderOptions()}</select>
        <button>ADICIONAR AO CARRINHO</button>
      </aside>
    </RestaurantDetailsStyle>
  );
};

export default RestaurantDetails;
