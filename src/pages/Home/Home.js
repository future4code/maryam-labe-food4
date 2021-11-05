import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Header from "../../components/Header/Header";
import {
  SearchContainerStyle,
  RestauranteContainer,
  CategroysStyle,
  SearchWrapper,
} from "./HomeStyle";
import SearchIcon from "@mui/icons-material/Search";
// import { useHistory, useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const Home = () => {
  useProtectedPage();

  // const history = useHistory();
  /* const pathParams = useParams();*/

  const {
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

    // console.log(objectOfCategorys, "ob");
    let newArray = Object.keys(objectOfCategorys);
    return newArray.map((category) => {
      //   console.log(category);
      return (
        <p
          style={choosedCategory === category ? { color: "#e86e5a" } : null}
          onClick={(event) => {
            event.stopPropagation();
            handleChooseCategory(category);
          }}
        >
          {category}
        </p>
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
              <p>Não encontramos :(</p>
            )
          ) : (
            <p>Busque pelo nome dos restaurantes</p>
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
    <>
      <SearchContainerStyle
        onClick={() => {
          console.log(foundRestaurants);
          setSerachInputOnFocus(false);
        }}
      >
        <Header />
        <SearchWrapper>
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
            placeholder="Restaurants"
            required
          />
          <img src={SearchIcon} />
        </SearchWrapper>
        <CategroysStyle>
          {foundRestaurants ? renderCategorys() : null}
        </CategroysStyle>
        {serachInputOnFocus && !form.searchInput ? (
          <p>Busque pelo nome dos restaurantes</p>
        ) : restaurants.length > 0 ? (
          restaurants
        ) : (
          <p>Não econtramos :(</p>
        )}
        {console.log("render")}
      </SearchContainerStyle>
    </>
  );
};

export default Home;
