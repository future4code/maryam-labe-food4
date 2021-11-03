import React from "react";
import { createGlobalStyle } from "styled-components";
import SearchPage from './pages/SearchPage/SearchPage';
import RestaurantDetails from './pages/RestaurantDetails/RestaurantDetails'

const GlobalStyle = createGlobalStyle`
body{
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  margin: 0;
  font-family: "SulSans", Helvetica, sans-serif;
  font-size: 1em;
  font-weight: 500;
}
div{
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  max-width: 400px;
  flex-shrink: 0;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <SearchPage/>
    </>
  );
}

export default App;
