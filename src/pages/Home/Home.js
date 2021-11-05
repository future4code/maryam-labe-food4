import React, { useState, useEffect, useContext } from "react";
import { GlobalContext }  from "../../contexts/GlobalContext";
import Header             from "../../components/Header/Header";
import {
  SearchContainerStyle,
  RestauranteContainer,
  CategroysStyle,
} from "./HomeStyle";

import useProtectedPage from "../../hooks/useProtectedPage";

import Box        from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Typography from '@mui/material/Typography';
import TextField  from "@mui/material/TextField";


const Home = () => {
  useProtectedPage();


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

  useEffect(() => {
    getListOfRestaurants();
  }, []);



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
    );
  };

  const restaurants = foundRestaurants
    .filter((restaurant) => {
      return restaurant.name
        .toLowerCase()
        .includes(form.searchInput.toLowerCase());
    })
    .filter((restaurant) => {
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
          key={restaurant.id}
        >
          <img alt="Restaurant" src={restaurant.logoUrl} />

          <Box sx={{
            paddingLeft: '4.4vw', 
            marginBottom:'-10px', 
          }}>

            <Typography color="primary.main" variant="body1">
              {restaurant.name}
            </Typography>
          </Box>

          <Box sx={{
            width:        'inherit',
            paddingLeft:  '4.4vw', 
            paddingRight: '4.4vw',
            marginBottom: '-10px',
          }}>

            <Typography color="primary.cinza" variant="body1">
              {restaurant.deliveryTime} min
            </Typography>

            <Typography color="primary.cinza" variant="body1">
              Frete R$ {handlePrice(restaurant.shipping)}
            </Typography>
          </Box>
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

        <Box
        sx={{
          display:        "flex",
          flexDirection:  "column",
          marginTop:      '2vh',
          marginBottom:   '2vh',
        }}
        >

          <TextField
          label="Restaurantes"
          type="text"
          variant="outlined"
          name={"searchInput"}
          placeholder={'Busca'}
          value={form.searchInput}
          onChange={(event) => {
              setSerachInputOnFocus(!false);
              onChange(event);
            }}
            onClick={(event) => {
              event.stopPropagation();
              setSerachInputOnFocus(true);
            }}
            InputProps={{
              startAdornment: (
                <SearchIcon /> 
              ),
            }}
          />

        </Box>

        <CategroysStyle>
          {foundRestaurants ? renderCategorys() : null}
        </CategroysStyle>

        {serachInputOnFocus && !form.searchInput ? (
            <Typography color="primary.main" variant="body1"> 
              Digite o nome do restaurante! 
            </Typography>        ) : restaurants.length > 0 ? (
          restaurants
        ) : (
          <Typography color="primary.main" variant="body1"> 
            Nenhum restaurante encontrado :(
          </Typography>
        )}
        {console.log("render")}
      </SearchContainerStyle>
    </>
  );
};

export default Home;
