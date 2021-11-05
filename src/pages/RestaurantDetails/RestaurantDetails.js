import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import {
  RestaurantDetailsStyle,
  RestauranteContainer,
  ElementContainer,
  CategoryTitleStyle,
} from "./RestaurantDetailsStyle";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useParams } from "react-router";
import DropDownArrow from "../../img/DropDownArrow.png";
import zIndex from "@mui/material/styles/zIndex";

const RestaurantDetails = () => {
  const {
    choosedRestaurant,
    setChoosedRestaurant,
    newArray,
    category,
    quantity,
    setQuantity,
    carrinho,
    choosedItem,
    setChoosedItem,
    removeItenFromCard,
    getDetails,
  } = useContext(GlobalContext);

  useProtectedPage();
  const pathParams = useParams();

  const addItensToCart = (item) => {
    console.log('este item',item)
    const productIndex = carrinho.findIndex(
      (itemOfCart, index) => item.id === itemOfCart.id
    );

    console.log('index5',productIndex)
    console.log('id do item', item.id)
    console.log('id do do carrinho', carrinho.id)

    if (productIndex === -1) {
      const newObject = {...item, restaurantId: pathParams.id, shipping: choosedRestaurant[0].shipping, quantity: quantity}
      carrinho.push(newObject);
    setQuantity(0)
    } else {
      const sumOfQuantity = (carrinho[productIndex].quantity + Number(quantity))
      const newObject = { ...item, quantity: sumOfQuantity};
      carrinho.splice(productIndex, 1, newObject);
    setQuantity(0)
    }
    setChoosedItem(false)
  };

  

  const handleQuantity = (quantity) => {
    setQuantity(quantity);
  };

  const handlePrice = (number) => {
    return number.toFixed(2).replace(".", ",");
  };

  const renderOptions = () => {
    const arrayOfOptions = [];
    for (let i = 0; i !== 11; i++) {
      arrayOfOptions.push(i);
    }
    return arrayOfOptions.map((option) => {
      return (
        <option key={option} onClick={() => handleQuantity(option)}>
          {option}
        </option>
      );
    });
  };

  const renderCategorys = () => {
    return category.map((categoryName) => {
      return (
        <CategoryTitleStyle key={categoryName}>
          <h2>{categoryName && categoryName}</h2>
          {newArray &&
            newArray[categoryName] &&
            newArray[categoryName].map((item) => {
              return (
                <ElementContainer key={item.id}>
                  <div>
                    <img alt="Food" src={item.photoUrl} />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>R$ {handlePrice(item.price)}</p>
                  </div>
                  <div>
                    {carrinho && carrinho.filter((itemOnCart, index) =>{
                      if(itemOnCart.id === item.id){
                        console.log("entrou")
                        console.log('index', carrinho[index])
                        return true
                      }}).map((itemOnCart) =>{
                        console.log('segundo map',itemOnCart.quantity)
                        return (<span> {itemOnCart.quantity} </span>)
                      })}

                    
                    {carrinho.findIndex(
                      (itemOnCart, index) => itemOnCart.id === item.id
                    ) === -1 ? (
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          setChoosedItem(item);
                        }}
                        style={{ zIndex: "20" }}
                      >
                        adicionar
                      </button>
                    ) :(
                      <button 
                      style={{ borderColor: "red", color: "red" }}
                      onClick={() => removeItenFromCard(item)}
                      >
                        remover
                      </button>
                    )}
                  </div>
                </ElementContainer>
              );
            })}
        </CategoryTitleStyle>
      );
    });
  };


  useEffect(() => {
    setChoosedRestaurant(null);
    getDetails(pathParams.id);
  }, []);

  return (
    <RestaurantDetailsStyle>
      <Header />
      {choosedRestaurant && choosedRestaurant.length && newArray && category ? (
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
      {category ? renderCategorys() : null}
      {console.log("render")}
      {console.log('quantidade render',quantity)}
      {choosedItem ? (
        <aside id="popup">
          <div>
            <p>Selecione a quantidade desejada</p>
            <div>
              <select
              // value={form.quantityInput}
              // onChange={onchange}
              >
                {renderOptions()}
              </select>
              <img alt="Dropdown Arrow" src={DropDownArrow} />
            </div>
            <div>
              <button
                onClick={() => {
                  addItensToCart(choosedItem);
                }}
              >
                ADICIONAR AO CARRINHO
              </button>
            </div>
          </div>
        </aside>
      ) : (
        ""
      )}
    </RestaurantDetailsStyle>
  );
};

export default RestaurantDetails;
