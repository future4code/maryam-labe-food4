import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  RestaurantDetailsStyle,
  RestauranteContainer,
  ElementContainer,
} from "./RestaurantDetailsStyle";
import Header from "../../component/Header/Header";

const RestaurantDetails = () => {
  const [id, setId] = useState("1");
  const [choosedRestaurant, setChoosedRestaurant] = useState([]);
  const [newArray, setNewArray] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    getDetails();
  }, []);

  const mapEverything = () =>{
    console.log('length', category.length)
    let t  = () => {for (let i = 0; i < category.length; i++) {
      newArray[category[i]].map((categorys) => {
        return (
          <>
            <h2>{category[i]}</h2>
            <ElementContainer key={categorys.id}>
              {/* <h2>{categorys[i].name}</h2> */}
              <div>
                <img src={categorys.photoUrl} />
              </div>
              <div>
                <h3>{categorys.name}</h3>
                <p>{categorys.description}</p>
                <p>R${categorys.price},00</p>
              </div>
            </ElementContainer>
          </>
        );
      });
  }}
  return t
}

  const mapTry = () => {
    console.log("sdadasd22", newArray.length);
    // let categoryName = Object.keys(newArray);
    
      // return object
    return(mapEverything())
  };

  const mapThethings = () => {
    var newArray = [];
    console.log("length", choosedRestaurant[0].products);
    // const mapTheDetails = choosedRestaurant[0].products.map
    for (let i = 0; i < choosedRestaurant[0].products.length; i++) {
      let category = choosedRestaurant[0].products[i].category;
      if (!newArray[category]) {
        newArray[category] = [];
      }
      newArray[category].push(choosedRestaurant[0].products[i]);
    }
    console.log("sadasd", newArray);
    let categorys = Object.keys(newArray);

    const renderCategorys = () => {
      for (let i = 0; i < categorys.length; i++) {
        return (
          <>
            <h2>{categorys[i]}</h2>
            {newArray[categorys[i]].map((category) => {
              return (
                <ElementContainer key={category.id}>
                  <div>
                    <img src={category.photoUrl} />
                  </div>
                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <p>R${category.price},00</p>
                  </div>
                </ElementContainer>
              );
            })}
          </>
        );
      }
    };
    console.log(renderCategorys());
    return renderCategorys();
  };
  const renderDetails = () => {
    console.log("teste", choosedRestaurant[0]);
    const mapTheDetails = choosedRestaurant[0].products.map((detail) => {
      return (
        <>
          {/* onClick={goToDetails()} key={detail.id} */}
          <ElementContainer key={detail.id}>
            <div>
              <img src={detail.photoUrl} />
            </div>
            <div>
              <h3>{detail.name}</h3>
              <p>{detail.description}</p>
              <p>R${detail.price},00</p>
            </div>
          </ElementContainer>
        </>
      );
    });
    return mapTheDetails;
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
      // let array = [response.data.restaurant]
      setChoosedRestaurant([response.data.restaurant]);
      console.log("resposta", response.data.restaurant.products);
      var newArray = [];
      for (let i = 0; i < response.data.restaurant.products.length; i++) {
        let category = response.data.restaurant.products[i].category;
        if (!newArray[category]) {
          newArray[category] = [];
        }
        newArray[category].push(response.data.restaurant.products[i]);
      }
      console.log("2", newArray);
      setNewArray(newArray);
      let categorys = Object.keys(newArray);
      setCategory(categorys);
      console.log("3", categorys);
      console.log(response.data.restaurant);
    } catch (error) {
      alert("error:", error);
    }
  };
  return (
    <RestaurantDetailsStyle>
      <Header />
      {choosedRestaurant.length !== 0 ? (
        <RestauranteContainer>
          <img src={choosedRestaurant[0].logoUrl} />
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
      {/* {choosedRestaurant.length !== 0 ? (
        mapThethings()
      ) : (
        <h1>Nenhum produto encontrado</h1>
      )} */}
      {newArray && category ? (mapEverything) : (<h1>Loading...</h1>)}
      {console.log("renderizado")}
      <button onClick={() => console.log(mapTry)} />
    </RestaurantDetailsStyle>
  );
};

export default RestaurantDetails;
