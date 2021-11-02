import React from "react";
import { createGlobalStyle } from "styled-components";
import SearchPage from './pages/SearchPage/SearchPage';
import RestaurantDetails from './pages/RestaurantDetails/RestaurantDetails'

const GlobalStyle = createGlobalStyle`
body{
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  /* height: 100vh; */
  margin: 0;
  background-color: #ffffff;
  font-family: "SulSans", Helvetica, sans-serif;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.8;
}
div{
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <RestaurantDetails/>
    </div>
  );
}

export default App;
