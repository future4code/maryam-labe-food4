import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Header from "../../components/Header/Header";
import {
  SearchContainerStyle,
  RestauranteContainer,
  CategroysStyle,
  SearchWrapper,
  HomeStyle,
} from "./HomeStyle";

import {SearchIcon} from "../../img/searchIcon.png";

// import { useHistory, useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";


import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router";
import searchIcon from '../../img/searchIcon.png'


const Home = () => {

  const history = useHistory()

  useProtectedPage();

  useLayoutEffect(() => {
    getActiveOrder()
    setTimeout(() => {
      setActiveOrder('')
    }, 3000);
  }, []);

  // const history = useHistory();
  /* const pathParams = useParams();*/

  const {
    getActiveOrder,
    setActiveOrder,
    form,
    onChange,
    getListOfRestaurants,
    choosedCategory,
    setChoosedCategory,
    foundRestaurants,
    setFoundRestaurants,
    serachInputOnFocus,
    setSerachInputOnFocus,
  } = useContext(GlobalContext);
  // const history = useHistory();
  /* const pathParams = useParams();*/

  useEffect(() => {
    getListOfRestaurants();
  }, []);

  // const [choosenRestaurant, setChoosenRestaurant] = useState([])

  // const goToDetails = (restaurant) => {
  //     setChoosenRestaurant()
  //     history.push()
  // }

  // const handlePrice = (number) =>{
  //   return number.replace('.', ',').toFixed(2)
  // }

  const handlePrice = (number) => {
    return number.toFixed(2).replace(".", ",");
  };

  const renderCategorys = () => {
    const objectOfCategorys = [];
    foundRestaurants.map((restaurant) => {
      if (!objectOfCategorys[restaurant.category]) {
        objectOfCategorys[restaurant.category] = [];
        objectOfCategorys[restaurant.category].push(restaurant.category);
      }
    });

    let newArray = Object.keys(objectOfCategorys);
    return newArray.map((category) => {
      return (
        <Typography
          onClick={(event) => {
            event.stopPropagation();
            handleChooseCategory(category);
          }}
        >
          {category}
        </Typography>
      );
    });
  };

  const handleChooseCategory = (category) => {
    if (!choosedCategory || category !== choosedCategory) {
      setChoosedCategory(category);
    }
    if (choosedCategory === category) {
      setChoosedCategory("");
    }

    return (
      <>
        <SearchContainerStyle>
          <Header title="Busca" />
          <input
            type="text"
            name="searchInput"
            value={form.searchInput}
            title="Insert the name of a restaurant"
            onChange={() => onChange()}
            placeholder="Restaurants"
            required
          />
          {foundRestaurants.length ? (
            restaurants.length > 0 ? (
              restaurants
            ) : (
              <Typography color="textPrimary" variant="body1"> 
                Nada foi encontrado :(
              </Typography>
            )
          ) : (
            <Typography color="textPrimary" variant="body1"> 
              Digite o nome do restaurante! 
            </Typography>
            )}
          {console.log("render")}
        </SearchContainerStyle>
      </>
    );
  };

  const restaurants = foundRestaurants
    .filter((restaurant) => {
      return restaurant.name
        .toLowerCase()
        .includes(form.searchInput.toLowerCase());
    })
    .filter((restaurant) => {
      // console.log(form.searchInput)
      if (
        restaurant.category === choosedCategory ||
        !choosedCategory ||
        form.searchInput
      ) {
        return true;
      } else {
        return false;
      }
    })
    .map((restaurant) => {
      return (

        <RestauranteContainer
          // onClick={goToDetails()}
          key={restaurant.id}
          onClick={() => history.push(`/restaurant/${restaurant.id}/`)}
        >
          <img alt="Restaurant" src={restaurant.logoUrl} />
          <h3>{restaurant.name}</h3>
          <div>
            <p>{restaurant.deliveryTime} min</p>
            <p>Frete R$ {handlePrice(restaurant.shipping)}</p>
          </div>
        </RestauranteContainer>
      );
    });
  
  return (
      <SearchContainerStyle
        onClick={() => {
          setSerachInputOnFocus(false);
        }}
      >
        <Header />

        <SearchWrapper>
          <div>
          <input
            type="text"
            name="searchInput"
            value={form.searchInput}
            title="Insert the name of a restaurant"
            onChange={(event) => {

              setSerachInputOnFocus(!false);
              onChange(event);
            }}
            onClick={(event) => {
              event.stopPropagation();
              setSerachInputOnFocus(true);
            }}

            //   onfocusout={(event) => console.log('out')}
            placeholder="Restaurante"
            required
          />
          <img src={searchIcon} />
          </div>
        </SearchWrapper>

        <CategroysStyle>
          {foundRestaurants ? renderCategorys() : null}
        </CategroysStyle>

        {serachInputOnFocus && !form.searchInput ? (
            <Typography color="primary.main" variant="body1"> 
              Digite o nome do restaurante! 
            </Typography>        ) : restaurants.length > 0 ? (
          restaurants
        ) : (

          <p>Não encontramos :(</p>

        )}
        {console.log("render")}
        <span></span>
      </SearchContainerStyle>
  );
};

export default Home;
