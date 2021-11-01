import React from "react";
import { createGlobalStyle } from "styled-components";
import SearchPage from './pages/SearchPage/SearchPage'

const GlobalStyle = createGlobalStyle`
body{
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  font-family: "SulSans", Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.8;
}
div{
  width: 100%;
  height: 100%;
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
